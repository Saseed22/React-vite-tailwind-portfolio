import React from 'react'

const Contact = () => {
  return (
      <div id='contact' className='max-w-[1040px] m-auto px-4 py-16 sm:pl-20'>
          <h1 className='py-4 text-4xl font-bold text-center text-[#001b5e]'>Contact</h1>
          <form action="" method='post' encType='multipart/form-data'>
              <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2' htmlFor="">Name</label>
                      <input className='border-2 rounded-lg p-3 border-gray-300 flex' type="text" name='name'/>
                  </div>
                  <div className='flex flex-col'>
                      <label className='uppercase text-sm py-2' htmlFor="">Phone</label>
                      <input className='border-2 rounded-lg p-3 border-gray-300 flex' type="text" name='phone' />
                  </div>
              </div>
              <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor="">Email</label>
                  <input className='border-2 rounded-lg p-3 border-gray-300 flex' type="email" name="email" id="" />
              </div>
              <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor="">Subject</label>
                  <input className='border-2 rounded-lg p-3 border-gray-300 flex' type="text" name="subject" id="" />
              </div>
              <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2' htmlFor="">Massage</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows="10"  name="massage" id=""></textarea>
              </div>
              <button className='w-full mt-4 bg-[#001b5e] text-gray-100 rounded-lg p-3'>Send massage</button>
          </form>
    </div>
  )
}

export default Contact