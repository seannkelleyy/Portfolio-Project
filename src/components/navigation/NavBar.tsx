import './Navigation.css'
import React from 'react'
import LightModeButton from './LightModeButton'

export const NavBar = () => {
	return (
		<header className='top-bar-container'>
			<div className='logo-box'>
				<a
					className='logo'
					href='/index.html'
				>
					<img
						src='/SK.png'
						alt='Sean Kelley'
						width='50'
						height='50'
					/>
				</a>
			</div>
			<nav className='nav-link-box'>
				<ul className='nav-links'>
					<li>
						<a href='https://github.com/seannkelleyy'>
							<img
								className='logo'
								alt='Github'
								src='/githubWhite.svg'
								width='50'
								height='50'
							/>
						</a>
					</li>
					<li>
						<a href='https://www.linkedin.com/in/seankelley15/'>
							<img
								className='logo'
								alt='Linkedin'
								src='/linkedIn.svg'
								width='50'
								height='50'
							/>
						</a>
					</li>
					<li>
						<a href='mailto:seannkelleyy1@gmail.com'>
							<img
								className='logo'
								alt='Email'
								src='/email.png'
								width='50'
								height='50'
							/>
						</a>
					</li>
				</ul>
			</nav>
			<div className='screen-mode-button-box'>
				<LightModeButton />
			</div>
		</header>
	)
}

