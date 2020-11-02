import React from "react";
import Com__NavProfileStyle from "./style/Com__NavProfileStyle";

const NavProfile = () => {
	return (
		<nav>
			<h2>Profile settings</h2>
			<div className='menu'>
				<a href='#' className='menu_actual'>
					Account
				</a>
			</div>
			<style jsx Com__NavProfileStyle>
        {Com__NavProfileStyle}
      </style>
		</nav>
	);
};

export default NavProfile;
