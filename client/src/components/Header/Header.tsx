import React from "react";
import logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <img src={logo} alt="To-Do" />
            </div>
            <search>
                <form>
                    <input type="text" placeholder="Search task" />
                    <button>
                        <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                </form>
            </search>
            <div className="profile-menu">
                <button>James Reece</button>
            </div>
        </header>
    );
};

export default Header;
