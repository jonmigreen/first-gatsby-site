import * as React from 'react'
import  { Link } from 'gatsby'

const NavBar = () => {
    return (
        <div>
            <Link to="/">Home</Link> <Link to="/about">About</Link> <Link to="/store">Store</Link>
        </div>
    )
}

export default NavBar