import React from "react";


function SelectableItem({className, data, active, onClick, style, children}) {

    const active_css = active ? "active " : " "

    const on_click = (e) => {
        onClick(e);
    }

    return (
        <button 
            className={"selectable-item " + active_css + className}
            onClick={on_click} 
            style={style}
            data-data={data}
        >
            {children}
        </button>
    )

}

export default SelectableItem