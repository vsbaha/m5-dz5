import React from 'react'
import { useSelector } from 'react-redux'
import { Link, Outlet } from 'react-router-dom'

export function Navbar() {

  const counter = useSelector(state => state.counter.counter)
  return (
    <div>
      <Link to="/card">Card</Link>
      <div>{counter}</div>
      <Outlet/>
      <footer>footer</footer>
    </div>
  )
}
