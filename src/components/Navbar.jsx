import React, { useState } from 'react'
import Logo from '../assets/logo2.png'
import { Link } from 'react-router-dom'
import { ShoppingCart } from 'lucide-react'
import { FaRegUser } from "react-icons/fa"
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi"
import ResponsiveMenu from './ResponsiveMenu'

export const NavbarMenu = [
  {
    id: 1,
    title: "Home",
    link: "/",
  },
  {
    id: 2,
    title: "Mens",
    link: "/mens",
  },
  {
    id: 3,
    title: "Womens",
    link: "/womens",
  },
  {
    id: 4,
    title: "Kids",
    link: "/kids",
  },
  {
    id: 5,
    title: "Contact",
    link: "/contact",
  },
]

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const toggleMenu = () => {
    setShowMenu(!showMenu)
  }

  return (
    <div className='text-white py-8'>
      <div className='container flex justify-between items-center'>
        {}
        <div>
          <img src={Logo} alt="" className='max-w-[100px] invert' />
        </div>

        {}
        <div className='hidden md:block'>
          <ul className='flex items-center gap-4 relative z-40'>
            {NavbarMenu.map((item) => (
              <li key={item.id}>
                <Link to={item.link} className='inline-block text-base font-semibold py-2 px-3 uppercase cursor-pointer'>
                  {item.title}
                </Link>
              </li>
            ))}
            <li>
              <Link to='/cart' className='cursor-pointer'>
                <button className='text-xl ps-14 cursor-pointer'>
                  <ShoppingCart />
                </button>
              </Link>
            </li>
            <li>
              <button className='text-xl ps-8 cursor-pointer'>
                <FaRegUser />
              </button>
            </li>
          </ul>
        </div>

        <div className='flex gap-8 md:hidden z-50'>
          <Link to={'/cart'} className='cursor-pointer'><ShoppingCart /></Link>
          {}
          {
            showMenu ? (
              <HiMenuAlt1 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30} />
            ) : (
              <HiMenuAlt3 onClick={toggleMenu} className='cursor-pointer transition-all md:hidden z-50' size={30} />
            )
          }
        </div>
      </div>
      <div>
        <ResponsiveMenu showMenu={showMenu} setShowMenu={setShowMenu} />
      </div>
    </div>
  )
}

export default Navbar