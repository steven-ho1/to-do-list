import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { Layout } from "./components";
import {
    Calendar,
    NotFound,
    ScheduledList,
    TodayList,
    TodoList,
} from "./pages";

const App: () => React.JSX.Element = () => {
    return (
        <div className="app">
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Navigate to="today" />} />
                    <Route path="today" element={<TodayList />} />
                    <Route path="scheduled" element={<ScheduledList />} />
                    <Route path="calendar" element={<Calendar />} />
                    <Route path="lists/:listId" element={<TodoList />} />
                    <Route path="*" element={<NotFound />} />
                </Route>
            </Routes>
        </div>
    );
};

export default App;
