import React from "react";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import Preferences from "./components/Preferences/Preferences";
import { Link } from "react-router-dom";

function App() {
	return (
		<div className="w-full">
			<h1>Application</h1>
			<nav>
				<Link to="/dashboard">Dashboard</Link>
				<Link to="/preferences">Preferences</Link>
			</nav>
		</div>
	);
}

export default App;
