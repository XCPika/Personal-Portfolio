import React from "react";


function Page({children, id}) {

    return (
        <div id={id} className="slide-in page" style={{gridRowStart: 1, gridColumnStart: 1}}>
            {children}
        </div>

    )
}


export default Page