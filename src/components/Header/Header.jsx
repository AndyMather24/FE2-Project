import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar.jsx';
const Header = () => {
	return (
		<div className="header-section">
			<h1 class="logo"> FakeNews</h1>
			<section className="login-section">Login details</section>
			<nav>
				<Navbar />
			</nav>
		</div>
	);
};

export default Header;
