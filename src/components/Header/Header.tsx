import React from 'react'
import classes from "./Header.module.css";

const Header = () => {
	return (
		<header className={classes.container}>
			<p className={classes.header}> Генератор базы </p>
		</header>
	)
}

export default Header