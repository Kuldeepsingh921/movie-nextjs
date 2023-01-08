import Link from 'next/link';
import React from 'react'

 const Navbar = () => {
  return (
    <div style={{height:'50px',
    backgroundColor:'skyblue',
    display:'flex',alignItems:'center',
    justifyContent:'center',gap:'20px'}}>
    <Link href={'/'}>Home</Link>
    <Link href={'/movies'}>Movies</Link>
    <Link href={'/wishlist'}>WishList</Link>
    </div>
  )
}
export default Navbar;
