import React from 'react'
import "./QueryHeader.css"
import logo from "../assets/logo.png"

function QueryHeader() {
    return (
    <div className='queryHeaderContainer'>
        {/* <p>Query image</p> */}
        <div className="queryImage">
            <img src={logo} alt="queryimage"/>
            <p>Name</p>
        </div>
        <div className="queryContent">
            <p className="bold">100% matching logo found</p>
            <p className="bold">Genuine Logo</p>
            <p >Since we found 100% matching logo
this means that the logo is registered and authentic</p>
            <p></p>
        </div>
    </div>)
}

export default QueryHeader
