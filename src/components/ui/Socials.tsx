import Link from 'next/link'
import path from 'path'
import React from 'react'
import {FaGithub,FaLinkedin,FaYoutube,FaTwitter} from "react-icons/fa"
interface Props {
  containerStyles:string,
  iconStyles:string
}

function Socials(props: Props) {
  const {containerStyles,iconStyles} = props
  const socials=[
    {icon:<FaGithub/>,path:""},
    {icon:<FaLinkedin/>,path:""},
    {icon:<FaYoutube/>,path:""},
    {icon:<FaTwitter/>,path:""},
  ]
  return (
    <div className={containerStyles}>
      {socials.map((item,index)=>(
        <Link key={index} href={item.path} className={iconStyles} >{item.icon}</Link>
      ))}
    </div>
  )
}

export default Socials
