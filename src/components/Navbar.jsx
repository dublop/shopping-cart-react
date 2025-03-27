import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { CartIcon } from './Icons'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const [modal, setModal] = useState(true)
  const cart = useSelector((state) => state.cart.value)

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
        
        <div hidden={modal} className='bg-neutral-950 text-white w-[300px] absolute top-16 right-0'>
          <div>{cart.map((item)=> (<p key={item.id}>{item.title}</p>))}</div>
        </div>
    </nav>
  )
}

export default Navbar