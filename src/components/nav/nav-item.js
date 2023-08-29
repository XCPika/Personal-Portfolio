import React from "react";
import { Link } from "react-router-dom";


export default function NavItem({text, url}) {
    return (
        <Link to={url}>{text}</Link>
    )
}