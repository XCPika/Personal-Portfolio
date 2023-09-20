import React, { useCallback, useEffect, useState} from "react";
import SelectableItem from "../selectable-item";
import { styled } from "styled-components";
import useDocumentTitle from "../useDocumentTitle";
import { useSearchParams } from "react-router-dom";

function removeActiveClass(elements) {
    Array.prototype.filter.call(
        elements,
        (element) => element.classList.remove("active")
    );
}


const AccordianItem = styled(SelectableItem)`
@media only screen and (max-width: 800px) {
    cursor: default !important ;
}
`

const AccordianImages = styled.div`
@media only screen and (max-width: 800px) {
    cursor: none;
}
`

const AccordianDot = styled.span`
    cursor: pointer;
    height: 1rem;
    width: 1rem;
    margin: 0 2px;
    background-color: #bbb;
    border-radius: 50%;
    display: inline-block;
    transition: background-color 0.6s ease;
    &.active {
        background-color: var(--accent-color, cyan);
    }
    @media only screen and (min-width: 800px) {
        display: none;
    }
`



function Acccordian({elements}) {

    const [activeIndex, setActiveIndex] = useState(Math.floor(elements.length / 2));
    const [, setSearchParams] = useSearchParams();

    const onClick = useCallback((e, className) => {
        const elems = document.getElementsByClassName("selectable-item")
        const dots = document.getElementsByClassName("accordian-dot")
        if (!e.parentElement.classList.contains("active")) {
            removeActiveClass(elems)
            removeActiveClass(dots)
            const int = parseInt(e.id.split(className)[1])
            setActiveIndex(int)
            setSearchParams(`?${new URLSearchParams({title: elements[int].title})}`)
            elems[int].classList.add("active")
            dots[int].classList.add("active")
        }
    }, [setSearchParams, elements])
 
    useEffect(() => {
        const elems = document.getElementsByClassName("selectable-item active");
        onClick(elems[0].childNodes[0], "accordian-image-")
        document.getElementById("accordian-text").innerText = elements[activeIndex].text;
    }, [activeIndex, onClick, elements]);

    useDocumentTitle("Callum Cowden's Portfolio - " + elements[activeIndex].title)

    return (
        <div className="accordian">
            <AccordianImages className="accordian-images">
                {elements.map((element, i) => {
                    return (<AccordianItem
                                key={"accordian-image-" + i}
                                active={i === activeIndex}
                                onClick={(e) => onClick(e.target, "accordian-image-")}
                            >
                                <img
                                    id={"accordian-image-" + i}
                                    draggable="false"
                                    src={element.src}
                                    alt={element.alt}
                                />
                            </AccordianItem>)
                })}
                    
            </AccordianImages>
            <div className="accordian-dots">
                {elements.map((_, i) => {
                    return (<AccordianDot 
                                key={"accordian-dot-" + i}
                                id={"accordian-dot-" + i}
                                className={"accordian-dot " + (i === activeIndex ? "active" : "")}
                                onClick={(e) => onClick(e.target, "accordian-dot-")}
                            />)
                    })
                }
            </div>
            <p id="accordian-text"/>
        </div>
    )

}

export default Acccordian;