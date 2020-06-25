import React from "react"

const boxStyle = {
    width: "300px",
    height: "200px",
    fontSize: "50px",
    textAlign: "center"
}
const LeftBox = (props) => {
    return (
        <div style={{...boxStyle, backgroundColor: props.color}} onClick={props.onClick}>
            click me
        </div>
    );
}

export default LeftBox