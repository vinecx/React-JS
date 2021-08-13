import React from 'react'

export const Header = () => {

    const headerStyle = {

        padding: '8px',
        backgroundColor: "black",
        color: 'white',
        marginBottom: '25px'
    }

    return(
        <div style={headerStyle} className="shadow">
            <div className="container">
                <h1 className="font-weight-lighter"><span className="font-weight-bolder"><u>React</u></span> with Node JS(<b>API</b>) Test</h1>
            </div>
        </div>
    )
}