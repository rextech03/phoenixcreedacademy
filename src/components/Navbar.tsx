"use client"

import * as React from "react"
import Link from "next/link"
import { Menu } from "lucide-react"
import Image from "next/image"

export default function Navbar() {
  const [state, setState] = React.useState(false)

  const menus = [
    { title: "Login", path: "/auth/login" },
    { title: "Register", path: "/auth/register" },
    // { title: "About Us", path: "/your-path" },
    // { title: "Contact Us", path: "/your-path" },
  ]

  return (
    <nav className="bg-gray-300 w-full border-b md:border-0 max-w-screen">
      <div className="items-center px-4 max-w-screen-xl mx-auto md:flex md:justify-between md:px-8">
        <div className="flex items-center justify-between py-3 md:py-5 md:block">
          <Link href="/">
            <Image src="/images/logo.png" alt="logo" width={120} height={120} className="h-6 w-6" />
          </Link>
          <div className="md:hidden">
            
            <button
              className="text-gray-700 outline-none p-2 rounded-md focus:border-gray-400 focus:border"
              onClick={() => setState(!state)}
            >
              <Menu />
            </button>
          </div>
        </div>
        <div
          className={`flex justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
            state ? "block" : "hidden"
          }`}
        >
          <ul className="justify-center items-center space-y-8 md:flex md:space-x-6 md:space-y-0">
            {menus.map((item, idx) => (
              <li key={idx} className="text-gray-600 hover:text-white hover:bg-blue-600 hover:py-2 hover:px-4 hover:rounded">
                <Link href={item.path}>{item.title}</Link>
              </li>
            ))}
            
          </ul>
        </div>
      </div>
    </nav>
  )
}