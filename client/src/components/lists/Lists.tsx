import React from "react";

const Lists = () => {
    return (
        <div>
            <div className="lists">
                <h2>Lists</h2>
                <ul>
                    <li>list1</li>
                    <li>list2</li>
                </ul>
            </div>
            <form>
                <input type="text" placeholder="Add new list" />
            </form>
        </div>
    );
};

export default Lists;
