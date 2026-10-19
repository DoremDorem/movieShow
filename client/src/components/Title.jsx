import React from 'react'

const Title = ({title}) => {
  return (
    <div className='p-4 px-16'>
         <h2 className='text-xl font-semibold text-gray-500'>{title}</h2>
         <hr className='w-14 border-2'/>
    </div>
  )
}

export default Title
