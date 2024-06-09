import React from "react";
import { Link } from "react-router-dom";

const Agenda = () => {
    return (
        <div className="agenda">
            <h2>Agenda</h2>
            <ul>
                <li>
                    <Link to="/today">Today</Link>
                </li>
                <li>
                    <Link to="/scheduled">Scheduled</Link>
                </li>
                <li>
                    <Link to="/calendar">Calendar</Link>
                </li>
            </ul>
        </div>
    );
};

export default Agenda;
