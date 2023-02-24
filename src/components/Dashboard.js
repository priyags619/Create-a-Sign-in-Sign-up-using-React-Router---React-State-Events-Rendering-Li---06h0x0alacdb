import React from "react";
import { Link } from 'react-router-dom';

function Dashboard({ setLoggedIn }) {

    return (
        <div id="dashboardPage">
            <h1 id="dashboard-tag"> Welcome to Dashboard</h1>
            <button id="dashboard-logout" onClick={() => setLoggedIn(false)}><Link to="/">Logout</Link></button>
        </div>
    )

}
export default Dashboard;