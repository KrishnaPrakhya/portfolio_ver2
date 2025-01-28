"use client"
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import React from 'react'

interface Props {}

function Nav(props: Props) {

  const links=[
    {
      name:"home",
      path:"/"
    },
    {
      name:"about",
      path:"/about"
    },
    {
      name:"skills",
      path:"/skills"
    },
    {
      name:"work",
      path:"/work"
    },
    {
      name:"services",
      path:"/services"
    },
    {
      name:"contact",
      path:"/contact"
    },
  ]
  const {} = props
  const pathName=usePathname();
  return (
    <>
      <nav className='flex gap-8 '>

      {
        links.map((item,index)=>(
          <Link href={item.path} key={index} className={`${item.path===pathName && "text-accent border-b-2 border-accent"} capitalize font-medium hover:text-accent transition-all"`}>{item.name}</Link>
        ))
      }
      </nav>
    </>
  )
}

export default Nav
