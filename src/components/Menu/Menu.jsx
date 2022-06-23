import * as React from 'react'
import {Link} from "react-router-dom";

import styles from "./styles.module.scss"

const Menu = () => {
	return (
		<nav className={styles.nav}>
			<Link to="/"> Каталог </Link>
			<Link to="/cart"> Корзина </Link>
		</nav>
	)
}

export default Menu