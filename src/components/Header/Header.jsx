import * as React from 'react'

import styles from "./styles.module.scss"
import Menu from "../Menu";

const Header = () => {
	return (
		<header className={styles.header}>
			<div className={styles.logo}>Интерьер.</div>
			<Menu/>
		</header>
	)
}

export default Header