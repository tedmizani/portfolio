import React from "react"
import Typed from "react-typed"

function Header() {
    return (
        <div className="header-wraper">
            <div className="main-info">
                <h1>DESIGN  </h1>
                <h1>DEVELOPMENT </h1>

                <Typed 
                className="typed-text"
                strings={["Web Design", "Web Development", "UI/UX Design", "Marketing"]}
                typeSpeed={50}
                backSpeed={70}
                loop
                />
                <a href="#" className="btn-main-offer">Let's talk</a>
                
            </div>
        </div>
    )
}

export default Header
