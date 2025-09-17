import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const navMenu = [
    {title: "Home", href: "/"},
    {title: "Categories", href: "/categories"},
    {title: "About", href: "/about"},
    {title: "Contact", href: "/contact"},
  ]
  return (
    <nav className="border-b border-gray-200">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 py-5">
        <h1 className="text-2xl text-blue-500">Numora</h1>
        <ul className="hidden md:flex gap-6 text-gray-500">
          {navMenu.map((item, index) => (
            <li key={index} className='hover:text-blue-500'>
              <Link href={item.href}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
