import Hero1 from'../../assets/hero.jpg'
export default function Hero(){


    return(
        <div className='flex flex-col mb-7'>
        <img src={Hero1} alt="img of a table full of food" className='h-30 sm:h-auto' />
<article className='bg-blue-500 items-center flex flex-col w-[70%] -mt-6 m-auto text-white p-6 shadow-xl/30'>
    <h1 className='text-3xl sm:text-4xl  mb-4 text-center'><span className='font-bold'>D</span>elicious food, <span className='font-bold '>D</span>eliver to you </h1>
    <p className='text-center text-white/90 mb-2 '><span className='font-bold'>F</span>reshly grilled chicken served with a mix of quinoa, roasted veggies,
     and a tangy sauce.</p>
  <p className='text-center text-white/80 '><span className='font-bold'>A</span> balanced, protein-packed meal perfect for lunch or dinner,
     delivered straight to your door.</p>
    </article>        
        </div>
    )
}