import { eventType, Inngest } from "inngest";
import { User } from "../models/userModel.js";

// Create a client to send and receive events
console.log(
  "Inngest client key available:",
  Boolean(process.env.INNGEST_SIGNING_KEY)
);

export const inngest = new Inngest({ id: "movie-ticket-booking" });

const syncUserCreation = inngest.createFunction(
  {
    id: "sync-user-from-clerk",
    triggers: [{ event: "clerk/user.created" }],
  },
  async ({ event }) => {
    try {
      const {
        id,
        first_name,
        last_name,
        email_addresses,
        image_url,
      } = event.data;

      const userData = {
        clerk_id: id,
        email: email_addresses?.[0]?.email_address,
        name: `${first_name || ""} ${last_name || ""}`.trim(),
        image: image_url || "",
      };

      console.log("User data:", userData);

      const user = await User.findOneAndUpdate(
        { clerk_id: id },
        { $set: userData },
        { upsert: true, new: true, runValidators: true }
      );

      console.log("Saved MongoDB user:", user);

      return { success: true };
    } catch (error) {
      console.error("MongoDB user save failed:", error);
      throw error;
    }
  }
);

const syncUserDeleted=inngest.createFunction(
  {
  id:"delete-user-from-clerk",
  triggers: [{ event: "clerk/user.deleted" }]
  },
  async({event})=>{
       const {id}=event.data;
       await User.findByIdAndDelete(id);
  }
)

const syncUserUpdated=inngest.createFunction(
  {
    id:"update-user-from-clerk",
    triggers: [{ event: "clerk/user.updated" }],
  },
  async({event})=>{
    const {id,first_name,last_name,email_addresses,image_url}=event.data;
    const userData={
      _id:id,
      email:email_addresses[0].email_addresses,
      name:first_name+' '+last_name,
      image:image_url
    }
    await User.findByIdAndUpdate(id,userData);
  }
)


// Create an empty array where we'll export future Inngest functions
export const functions = [syncUserCreation,syncUserDeleted,syncUserUpdated];