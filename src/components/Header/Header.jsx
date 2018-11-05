import React from 'react';
import './Header.css';
import Navbar from '../Navbar/Navbar.jsx';
const Header = (props) => {
	return (
		<div className="header-section">
			<h1 class="logo"> FakeNews</h1>
			<section className="login-section">Login details</section>
			<nav>
				<Navbar topics={props.topics} />
			</nav>
		</div>
	);
};

export default Header;
