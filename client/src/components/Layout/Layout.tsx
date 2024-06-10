import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Sidebar } from "..";
import { ListProvider } from "../../contexts/ListProvider";
import "./Layout.css";

const Layout: () => React.JSX.Element = () => {
    return (
        <>
            <ListProvider>
                <Header />
                <div className="content-container">
                    <Sidebar />
                    <main>
                        <Outlet />
                    </main>
                </div>
            </ListProvider>
        </>
    );
};

export default Layout;
