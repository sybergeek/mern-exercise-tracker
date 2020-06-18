import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
	render() {
		return (
			<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				<Link to="/" className="navbar-brand">ExcerTracker</Link>
				<button className="navbar-toggler" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse">
					<ul className="navbar-nav mr-auto">
						<li className="navbar-item">
							<Link to="/" className="nav-link">Exercises</Link>
						</li>
						<li className="navbar-item">
							<Link to="/create" className="nav-link">Create Exercise Log</Link>
						</li>
						<li className="navbar-item">
							<Link to="/user" className="nav-link">Create User</Link>
						</li>
					</ul>
				</div>
			</nav>
		);
	}
}

export default Navbar;