import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {

  const data = useSelector((state)=>state.auth.user)

  return (
    <div>{data}</div>
  )
}

export default Navbar