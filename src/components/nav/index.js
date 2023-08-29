import React from "react"
import { Link } from "react-router-dom"


function Nav({children, title}) {

    return (
        <header>
            <Link to="/">
                <h1>{title}</h1>
            </Link>
            <nav>
                {children}
            </nav>
        </header>
    )
}



export default Nav