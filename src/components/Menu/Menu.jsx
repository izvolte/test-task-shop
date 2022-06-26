import * as React from 'react'
import {Link} from "react-router-dom";

import {ReactComponent as CartIcon} from '@/assets/icons/cart.svg';
import {ReactComponent as CatalogIcon} from '@/assets/icons/catalog.svg';


import styles from "./styles.module.scss"

const Menu = () => {
	return (
		<nav className={styles.nav}>
			<Link to="/test-task-shop/">
				<span>Каталог</span>
				<CatalogIcon/>
			</Link>
			<Link to="/test-task-shop/cart">
				<span>Корзина</span>
				<CartIcon/>
			</Link>
		</nav>
	)
}

export default Menu