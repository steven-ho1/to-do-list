import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "../";
import "./Layout.css";

const Layout: () => React.JSX.Element = () => {
    return (
        <>
            <Header />
            <div className="content-container">
                <Sidebar />
                <main>
                    <Outlet />
                </main>
            </div>
        </>
    );
};

export default Layout;
