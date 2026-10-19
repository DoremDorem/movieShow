import React from 'react'
import {useAuth} from "@clerk/react"
const ProtectAuth = () => {
    const {getToken,isSignedIn}=useAuth();

    const checkBackend=async()=>{
        try {
            const token = await getToken();
            const response = await fetch(
            "http://localhost:5000/api/protected",
            {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            }
        );
        const data = await response.json();
       console.log("Backend response:", data);
        } catch (error) {
            console.log("API request failed:", error);
        }
    }
    return (
    <div className='mt-30 text-white'>
       <button onClick={checkBackend} disabled={!isSignedIn}>
      Test Protected API
    </button>
    </div>
  )
}

export default ProtectAuth
