import * as React from 'react'
import { Outlet } from 'react-router-dom'

import Header from "@/components/Header";

import styles from "./styles.module.scss"

const MainLayout = () => {
	return (
		<div className={styles.container}>
			<Header/>
			<React.Suspense fallback={'Загрузка'}>
				<Outlet />
			</React.Suspense>
		</div>
	)
}

export default MainLayout