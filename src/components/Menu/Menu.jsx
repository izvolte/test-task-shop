import * as React from 'react'
import {Link} from "react-router-dom";

import {ReactComponent as CartIcon} from '@/assets/icons/cart.svg';
import {ReactComponent as CatalogIcon} from '@/assets/icons/catalog.svg';


import styles from "./styles.module.scss"

const Menu = () => {
	return (
		<nav className={styles.nav}>
			<Link to="/">
				<span>Каталог</span>
				<CatalogIcon/>
			</Link>
			<Link to="/cart">
				<span>Корзина</span>
				<CartIcon/>
			</Link>
		</nav>
	)
}

export default Menu