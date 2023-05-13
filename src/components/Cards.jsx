
import cat1 from '../assets/cat1.jpg'
import cat2 from '../assets/cat2.png'
import cat3 from '../assets/cat3.png'
import cat4 from '../assets/cat4.png'

export const Cards = () => {
  return (
    <div className=" w-full py-[10rem] px-4 bg-white">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-105 duration-300">
          <img className='w-28 mx-auto mt-[-3rem] bg-white' src={cat1} alt='/'></img>
          <h2 className=' text-2xl font-bold text-center py-8'> Single User</h2>
          <p className='text-center text-4xl font-bold'> $149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '> Minim eu ex </p>
            <p className='py-2 border-b mx-8  ' > anim ullamco </p>
            <p className='py-2 border-b mx-8'>cupidatat nisi </p>
          </div>
          <button className='bg-[#ea4171] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '> Start Trial </button>
        </div>

        <div className=" w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg  hover:scale-105 duration-300">
          <img className='w-28 mx-auto mt-[-3rem] bg-transparent' src={cat4} alt='/'></img>
          <h2 className=' text-2xl font-bold text-center py-8'> Single User</h2>
          <p className='text-center text-4xl font-bold'> $149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '> Minim eu ex </p>
            <p className='py-2 border-b mx-8  ' > anim ullamco </p>
            <p className='py-2 border-b mx-8'>cupidatat nisi </p>
          </div>
          <button className='text-[#ea4171] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black '> Start Trial </button>
        </div>

        <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-105 duration-300">
          <img className='w-28 mx-auto mt-[-3rem] bg-white' src={cat3} alt='/'></img>
          <h2 className=' text-2xl font-bold text-center py-8'> Single User</h2>
          <p className='text-center text-4xl font-bold'> $149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '> Minim eu ex </p>
            <p className='py-2 border-b mx-8  ' > anim ullamco </p>
            <p className='py-2 border-b mx-8'>cupidatat nisi </p>
          </div>
          <button className='bg-[#ea4171] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '> Start Trial </button>
        </div>




      </div>
    </div>
  )
}
