import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header className="navbar">
			<nav className="headerNavbar">
				<Link to="/">
					<button> Dashboard</button>
				</Link>
				<Link to="/form">
					<button>Add Inventory</button>
				</Link>
			</nav>
		</header>
	);
}

export default Header;
