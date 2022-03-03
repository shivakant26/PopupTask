import React from "react";
import Menu from "./Menu";

class Header extends React.Component{
    render(){
        return(
            <div className="header">
                <div className="center_wr">
                    <div className="clearfix">
                        <div className="logo">
                            <h1>logo</h1>
                        </div>
                        <div className="menubar">
                            <Menu />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default Header;