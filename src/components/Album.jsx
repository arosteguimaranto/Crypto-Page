import album from '../data/album.js'
import { v4 as uuidv4 } from 'uuid';

export const Album = () => {

  const data = album;


  return (
    <section>
    <div className='flex flex-wrap -m-4 text-white'>
    {data.map((item) => (
      <div className='p-4 lg:w-1/2' key={uuidv4()}>
        <div className="h-full flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left">
          <img alt="team" className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4" src={item.imgUrl} />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">{item.title}</h2>
            <h3 className="text-gray-500 mb-3">{item.year}</h3>
            <p className="mb-4">{item.details}</p>
          </div>
        </div>
      </div>
    ))}
  </div>
    </section>
  
  )
}









