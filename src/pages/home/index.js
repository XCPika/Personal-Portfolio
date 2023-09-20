import React from "react";
import './home.scss';
import Page from "../../components/page";
import useDocumentTitle from "../../components/useDocumentTitle";

function Home() {
    useDocumentTitle("Callum Cowden's Portfolio")

    return (
        <Page id="home">
            <div>
                <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean quis lacus quam.
Nunc non fermentum dui. Nunc finibus est consequat enim consequat, ut
consectetur lectus malesuada. Phasellus pellentesque libero sit amet facilisis
commodo. Nulla lobortis, ante vel convallis fringilla, ipsum tortor eleifend sapien, in
semper eros nunc vitae dolor. Nunc interdum rhoncus ligula eu tincidunt. Nulla orci
purus, malesuada lacinia feugiat sed, molestie ut purus. Mauris eget elementum
diam, vitae consequat tellus.
        
                </p>
                
                <img
                    src="./code.png"
                    alt="Some React code in a visual studio code editor"
                />

            </div>
        </Page>
    )

}

export default Home