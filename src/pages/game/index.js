import React, { useEffect, useState } from "react";
import './game.scss'
import Page from "../../components/page";
import data from "./data";
import { useSearchParams } from "react-router-dom";
import useDocumentTitle from "../../components/useDocumentTitle";

function removeActiveClass(elements) {
    Array.prototype.filter.call(
        elements,
        (element) => element.classList.remove("active")
    );
}

function updateGameDetails() {
    
    console.log(document.getElementsByClassName("game-item active"))
    const element = document.getElementsByClassName("game-item active")[0].childNodes[0];
    for (const key in element.dataset) {
        if (Object.hasOwnProperty.call(element.dataset, key)) {
            const object = element.dataset[key];
            document.getElementById("game-details-" + key).innerText = object
            
        }
    }
}

function GameItem({element, active}) {
    
    const [, setSearchParams] = useSearchParams();

    const active_css = active ? "active" : ""

    const on_click = (e) => {
        const elements = document.getElementsByClassName("game-item");
        if (!e.target.parentElement.classList.contains("active")) {
           removeActiveClass(elements);
        }
        e.target.classList.add("active");
        updateGameDetails();
        setSearchParams(`?${new URLSearchParams({title: e.target.childNodes[0].dataset.title})}`)
    }

    return (
        
        <button 
            className={"game-item " + active_css}
            onClick={on_click} 
            style={{'--background': "url(" + element.ico + ")"}}
        >
            <img
                draggable="false"
                data-title={element.data.title}
                data-text={element.data.text}
                data-support={element.data.support}
                data-built={element.data.built}
                src={element.src}
                alt={element.alt}
            />
        </button>
    )

}



function Game() {
    const [activeIndex, setActiveIndex] = useState(Math.floor(data.length / 2));
    const [searchParams] = useSearchParams();
    
    useEffect(
        () => {
            if(searchParams.has("title")) {
                setActiveIndex(data.findIndex(
                    (element) => {
                        if (element.data.title === searchParams.get("title")) {
                            return true;
                        }
                        return false;
                    }
                ))
            }
            const elements = document.getElementById("game-selector").childNodes;
            removeActiveClass(elements);
            elements[activeIndex].classList.add("active")
            updateGameDetails();

        }, [activeIndex, searchParams]
    );

    useDocumentTitle("Callum Cowden's Portfolio - " + data[activeIndex].data.title)

    return (
        <Page id="game">
            <div id="game-selector">
                {
                    data.map((element, i) => {
                        return (
                            <GameItem
                                key={"game-item-" + i}
                                element={element}
                                active={i === activeIndex}
                            />
                        )
                    })
                }
            </div>
            <div id="game-details">
                <h2 id="game-details-title">Game Example</h2>
                <p id="game-details-support">Supported Platforms:</p>
                <p id="game-details-built">Built with:</p>
                <p id="game-details-text"></p>
            </div>
        </Page>
    )
}

export default Game