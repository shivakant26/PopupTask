import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component{
    render(){
        return(
            <div className="menu">
                <Link to="/userform">userform</Link>
                <Link to="/list">list</Link>
            </div>
        )
    }
}
export default Menu;