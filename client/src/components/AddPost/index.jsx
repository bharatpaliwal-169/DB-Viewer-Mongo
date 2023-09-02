import React from 'react'
import {
  Button
} from "@material-tailwind/react";
const AddPost = () => {
  return (
    <section className='min-h-screen flex items-center justify-center'>
      {/* container */}
      <div className='max-w-2xl px-8 py-4 bg-slate-100 rounded-lg shadow-lg '>
        {/* heading */}
        <div className="mt-2">
          <p className="text-xl font-bold text-gray-700">Accessibility tools for designers and developers</p>
        </div>
        
        {/* body */}
        <div className="mt-2">
          <p className="mt-2 text-gray-600 dark:text-gray-300">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora expedita dicta totam aspernatur doloremque. Excepturi iste iusto eos enim reprehenderit nisi, accusamus delectus nihil quis facere in modi ratione libero!</p>
        </div>

        <div>
          <input type="text" name="title" id="title" 
          className='w-full h-20 p-1 border-none outline-none text-4xl'
          placeholder='Enter title here' />
        </div>

        <div>
          
        </div>
        
        
        
        
        
        
        <div className='mt-2'>
          <button className='w-full py-2 bg-blue-700 hover:bg-blue-500 text-gray-100 font-semibold rounded-lg shadow-lg shadow-blue-gray-50 '>
            SUBMIT
          </button>
          <Button className='mt-5' fullWidth color='blue'>Submit</Button>
        </div>



      </div>
    </section>
  )
}

export default AddPost;