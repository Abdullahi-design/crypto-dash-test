import Link from 'next/link'
import React from 'react'

const MenuBar = () => {
    const items = [
        {name: "Exchange", href: "/exchange"},
        {name: "Wallets", href: "/wallets"},
        {name: "Roqqu Hub", href: "/roqqu-hub"},
        {name: "Log out", href: "/log-out"},
    ]
  return (
    <div className='bg-gray-800 md:hidden block absolute top-20 w-[30%] right-0 space-y-2 py-2 rounded-xl border border-gray-700'>
        {items.map((item, index) => (
            <Link key={index} href={item.href} className="hover:bg-gray-700 p-2 px-4 block">
                {item.name}
            </Link>
        ))}
    </div>
  )
}

export default MenuBar