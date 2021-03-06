import React from 'react';
import { Link } from 'react-router';
import Login from './../Login/Login'
import Logout from './../Logout/Logout';

export default class Navbar extends React.Component {

	renderAuthButton() {
			if(localStorage.token) {
				return <Logout />
			} else {
				return <Login />
			}
		}

	render() {
		return(
			<nav className="navbar">
				<div className="row">
					<div className='small-6 columns'>
						<ul className="menu">
							<li><a href="#">TC</a></li>
							<li><Link to="/">Home</Link></li>
							<li><Link to="/frame-data">Frame Data</Link></li>
						</ul>
					</div>
					<div className='small-5 columns'>
						<ul className="menu align-right">
							<li>
								{this.renderAuthButton()}
							</li>
						</ul>
					</div>
				</div>
			</nav>
		);
	}
}
