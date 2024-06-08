import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import { Calendar, List, NotFound, ScheduledList, TodayList } from "./pages";

const App: () => React.JSX.Element = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="today" />} />
                    <Route path="today" element={<TodayList />} />
                    <Route path="scheduled" element={<ScheduledList />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="lists/:listId" element={<List />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
