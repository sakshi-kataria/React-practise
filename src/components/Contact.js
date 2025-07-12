import React from 'react'

const Contact = () => {
  return (
    <div className='shadow-xl rounded-4xl p-4 m-4 border border-gray-400'>
      <h1 className='p-4 m-4 font-bold text-3xl'>Contact us</h1>
      <form className='px-4'>
        <input type='text' className=' border border-black p-2 m-2' placeholder='name' title='name'/>
        <input type='text' className=' border border-black p-2 m-2' placeholder='message'></input>
        <button className=' border border-black p-1 m-2 bg-green-400 rounded-xl'>Submit</button>
      </form>
    </div>
  )
}

export default Contact
