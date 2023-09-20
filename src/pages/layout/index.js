import React from "react"
import { Outlet } from "react-router-dom";
import Nav from "../../components/nav"
import NavItem from "../../components/nav/nav-item"
import { styled } from "styled-components";

const Main = styled.div`
    display:grid;
    grid-template-columns: auto;
    min-height: calc(100svh - (clamp(50px, 4svh, 7svh) + 3.5svh));
    background-color: var(--tertiary-bg);
    @media only screen and (max-width: 700px) {
        min-height: calc(100svh - (clamp(80px, 6svh, 8svh) + 4.5svh));
    }
    z-index:0;
`

const Overlay = styled.div`
    grid-row-start:1;
    grid-column-start:1;
    background-color:var(--primary-bg);
    width:100%;
    height:100%;
    clip-path: polygon(100% 0px, 100% 33svh, 50% 50svh, 0 33svh, 0px 0px);
`

export default function Layout() {
    return (
        <>
            <Nav title="Callum Cowden">
                <NavItem text="Web Development" url={"/web"}/>
                <NavItem text="Games" url={"/game"}/>
                <NavItem text="Application" url={"/application"}/>
            </Nav>
            <Main>
                <Overlay className="slide-area"/>
                <Outlet/>
            </Main>
        </>
    )
}