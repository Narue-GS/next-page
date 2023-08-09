import Image from 'next/image'

import { BsFillArrowUpCircleFill } from "react-icons/bs"

export default function Home() {
  return (
    <>
      <header className='bg-sky-500 top-0 fixed w-screen flex place-items-center p-6 justify-between shadow-lg rounded-bl-lg rounded-br-lg'>
        <h1 className='text-3xl'>Next Page</h1>
        <nav className='flex'>
          <span className='px-3 py-1 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>exemplo</span>
          <span className='px-3 py-1 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>exemplo</span>
          <span className='px-3 py-1 hover:bg-[rgba(255,255,255,0.2)] hover:scale-110 cursor-pointer transition'>exemplo</span>
          <button className='group/enter flex gap-2 ml-10 rounded-2xl border border-black shadow-lg px-3 py-1 font-light'>
            <span className=''>ENTER</span>
            <BsFillArrowUpCircleFill className='text-2xl group-hover/enter:text-green-500 group-hover/enter:bg-black rounded-full transition'/>
          </button>
        </nav>
      </header>
      <section className="flex place-items-center h-[50vw] mt-5 bg-cover bg-[url('https://blog.trello.com/hubfs/DashboardFinal.png')]">
        <div className='h-full w-[80%] bg-gradient-to-r from-black to-transparent flex pl-10 text-9xl text-white font-bold place-items-center'>
          <h1>
            <span className='text-detail'>Our</span> product <br /> 
            admin system
          </h1>
        </div>
      </section>
      <main className='py-6 first:mt-0'>
        <section className="flex mt-5 justify-center">
          <div className="bg-gradient-to-r gap-10 from-purple-900 to-detail w-[80%] h-[28vw] p-6 shadow-lg flex">
            <div className='text-white flex flex-col w-[50%] justify-center'>
              <h1 className='text-5xl font-bold'>Título</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, illo repudiandae. Autem, rerum, iste eaque ratione in, harum unde voluptas distinctio iure similique rem quo non sint temporibus beatae fugit.</span>
            </div>
            <Image
              className='h-[100%]'
              width={500}
              height={200}
              src={'/image1.webp'}
              alt=''
            />
          </div>
        </section>
        <section className="flex mt-5 justify-center">
          <div className="bg-gradient-to-r gap-10 from-detail to-purple-900 w-[80%] h-[28vw] p-6 shadow-lg flex flex-row-reverse">
            <div className='text-white flex flex-col w-[50%] justify-center'>
              <h1 className='text-5xl font-bold'>Título</h1>
              <span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, illo repudiandae. Autem, rerum, iste eaque ratione in, harum unde voluptas distinctio iure similique rem quo non sint temporibus beatae fugit.</span>
            </div>
            <Image
              className='h-[100%]'
              width={500}
              height={200}
              src={'/image2.webp'}
              alt=''
            />
          </div>
        </section>
        
      </main>
      <footer className='bg-black text-white flex justify-evenly py-10'>
        <div className='flex flex-col'>
          <h1 className='font-bold text-3xl'>Contact</h1>
          <ol className=' text-left'>
            <li>info</li>
            <li>info</li>
            <li>info</li>
          </ol>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-3xl'>My Pannel</h1>
          <ol className=' text-left'>
            <li>info</li>
            <li>info</li>
            <li>info</li>
          </ol>
        </div>
        <div className='flex flex-col'>
          <h1 className='font-bold text-3xl'>More info</h1>
          <ol className=' text-left'>
            <li>info</li>
            <li>info</li>
            <li>info</li>
          </ol>
        </div>
      </footer>
    </>
  )
}
