import React from "react";
import Link from "next/link";

import HomeStyle from "./HeaderStyle";
import logo from "../../assets/img/Artist/logo.png";

import { HeaderLinks } from "./molecules/Mol__HeaderLinks";

function Header() {
	return (
		<header className='header'>
			<div className='container'>
				<Link href='/' className='header__img__container'>
					<img src={logo} alt='Logo-Lara' />
				</Link>
				<HeaderLinks />
			</div>

			<style jsx HomeStyle>
				{HomeStyle}
			</style>
		</header>
	);
}
export default Header;
