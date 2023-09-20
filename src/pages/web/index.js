import React from "react";
import './web.scss';
import Acccordian from "../../components/accordian";
import data from './data'
import Page from "../../components/page";

function Web() {
    return (
        <Page id="web">
            <Acccordian
                change_size={800}
                //supports 12 elements
                elements = {data}>
            </Acccordian>
        </Page>
    )
}

export default Web