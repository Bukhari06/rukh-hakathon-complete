import React from 'react'
import Image from 'next/image'

const page = () => {
  return (
    
<div className='text-center font-bold justify-left p-3'>Crockery
<div className="flex flex-wrap gap-4 justify-center">
  <div className="relative sm:mt-2 sm:ml-4 md:mt-4 md:ml-6 lg:mt-6 lg:ml-8">

    <Image
      src="/cr.jpg"
      alt="Art"
      width={305}
      height={462}
      className="object-cover"
    />

  </div>


</div>
</div>


  )
}

export default page;
