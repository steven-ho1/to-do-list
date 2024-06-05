import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import List from "./pages/List/List";

const App = () => {
    return (
        <div className="app">
            <Header />
            <div className="content">
                <Sidebar />
                <List />
            </div>
        </div>
    );
};

export default App;
