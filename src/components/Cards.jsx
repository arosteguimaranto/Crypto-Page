
import shirt1 from '../assets/97ff10dec53cbf0074ac1f626e5c7cf8.jpg'
import  shirt2 from '../assets/3e388aac8b9fb48c45e285add91870d4.jpg';
import  shirt3 from '../assets/04949cbb785bbea85e93c81edcc1697a.jpg';

export const Cards = () => {
  return (
    <div className=" w-full py-[10rem] px-4 bg-white">
      <div className=" max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-105 duration-300">
          <img className='w-28 mx-auto mt-[-3rem] bg-white' src={shirt3} alt='/'></img>
          <h2 className=' text-2xl font-bold text-center py-8'> Joanne Tee</h2>
          <p className='text-center text-4xl font-bold'> $149</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '> Minim eu ex </p>
            <p className='py-2 border-b mx-8  ' > anim ullamco </p>
            <p className='py-2 border-b mx-8'>cupidatat nisi </p>
          </div>
          <button className='bg-[#ea4171] w-[200px] rounded-md font-medium my-6 mx-auto py-3 text-black '> Start Trial </button>
        </div>

        <div className=" w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg  hover:scale-105 duration-300">
          <img className='w-28 mx-auto mt-[-3rem] bg-transparent' src={shirt1} alt='/'></img>
          <h2 className=' text-2xl font-bold text-center py-8'> Joanne sweater</h2>
          <p className='text-center text-4xl font-bold'> $250</p>
          <div className='text-center font-medium'>
            <p className='py-2 border-b mx-8 mt-8 '> Minim eu ex </p>
            <p className='py-2 border-b mx-8  ' > anim ullamco </p>
            <p className='py-2 border-b mx-8'>cupidatat nisi </p>
          </div>
          <button className='text-[#ea4171] w-[200px] rounded-md font-medium my-6 mx-auto py-3 bg-black '> Start Trial </button>
        </div>

        <div className=" w-full shadow-xl flex flex-col p-4 my-4 rounded-lg  hover:scale-105 duration-300">
          <img className='w-28 mx-auto mt-[-3rem] bg-white' src={shirt2} alt='/'></img>
          <h2 className=' text-2xl font-bold text-center py-8'> Born This Way Tee</h2>
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
