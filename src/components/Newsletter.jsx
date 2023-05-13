import React from 'react'

export const Newsletter = () => {
    return (
        <div className='w-full py-16 text-white'>
            <div className='max-w-[1240px] mx-auto grid lg:grid-cols-3'>
                <div className='lg:col-span-2 my-4'>
                    <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>Mollit et cillum labore dolore minim</h1>
                    <p className=''>Duis mollit ipsum magna cillum aute dolore veniam.</p>
                </div>
                <div className='my-4'>
                    <div className='flex flex-col sm:flex-row items-center justify-between w-full'>
                        <input className='p-3 flex w-full rounded-md text-black' type='email' placeholder='Enter Email' />
                        <button className='bg-[##ea4171] w-[200px] rounded-md  font-medium ml-4 my-6 mx-auto py-3 text-black '>Notify me</button>
                    </div>
                    <p> Proident et labore aliqua non reprehenderit <span className='text-[##ea4171] '> in exercitation. </span></p>
                </div>
            </div>

        </div>
    )
}
