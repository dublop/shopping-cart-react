import React, { useState } from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { CartIcon } from './Icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [modal, setModal] = useState(true)
  const cart = useSelector((state) => state.cart.value)
  const navigate = useNavigate()

  const handleModal = () => {
    setModal(prevState => !prevState)
  }
  return (
    <nav className=' static w-full flex items-center justify-around py-[16px] border-b-1 border-neutral-400'>
        <h1>Gemswear</h1>
        <ul className='flex gap-4'>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/cart'}>Cart</NavLink>
        </ul>
        <button onClick={handleModal} className='bg-neutral-950 p-2 rounded-md hover:cursor-pointer'><CartIcon className="text-white" /></button>
        
        <div hidden={modal} className='flex flex-col gap-1.5 bg-neutral-950 text-white w-[300px] absolute top-16 right-0 p-[20px] rounded-md'>
          {cart.map((item)=> (
            <div className='w-[260px] flex flex-row items-center gap-1 p-[10px] border-1 border-neutral-400 rounded-md' key={item.id}>
              <div className='w-[50px] h-[50px]'>
                <img src={item.image} alt={item.category} className='w-full h-full object-contain' />
              </div>
              <p className='truncate'>{item.title}</p>
              </div>
            ))}
            <button onClick={() => navigate('/cart')} className='w-full mt-2 p-2 bg-white text-neutral-950 rounded-md hover:cursor-pointer'>View cart</button>
        </div>
    </nav>
  )
}

export default Navbar