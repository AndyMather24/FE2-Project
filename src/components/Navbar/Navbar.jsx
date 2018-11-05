import React, { Fragment } from 'react';
import { Link } from '@reach/router';
import './Navbar.css';
const Navbar = (props) => {
	return (
		<div>
			<nav className="header-navbar">
				{props.topics.map((topic) => {
					return (
						<Fragment key={topic._id}>
							<Link className="nav-links" to={`/topics/${topic.slug}`}>
								{topic.title}{' '}
							</Link>
						</Fragment>
					);
				})}
			</nav>
		</div>
	);
};

export default Navbar;
