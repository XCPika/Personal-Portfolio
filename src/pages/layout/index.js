import React from "react"
import { Outlet } from "react-router-dom";
import styled from 'styled-components';
import Nav from "../../components/nav"
import NavItem from "../../components/nav/nav-item"

const Main = styled.div`
    display:flex;
    flex-direction: column;
    flex-grow: 1;
`


export default function Layout() {
    return (
        <div>
            <Nav title="Callum Cowden">
                <NavItem text="Web Development" url={"/web"}/>
                <NavItem text="Games" url={"/game"}/>
                <NavItem text="Application" url={"/application"}/>
            </Nav>
            <Main>
                <Outlet/>
            </Main>
        </div>
    )
}