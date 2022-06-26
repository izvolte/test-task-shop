import * as React from 'react'

import {ReactComponent as FavIcon} from '@/assets/icons/fav.svg';
import {ReactComponent as ShopIcon} from '@/assets/icons/shop.svg';

import styles from "./styles.module.scss"

const Card = ({thumb, description, name, price}) => {
	return (
		<div className={styles.card}>
			<FavIcon className={styles.favIcon}/>
			<ShopIcon className={styles.shopIcon}/>
			<img alt="Изображение товара" className={styles.thumb} src={thumb}/>
			<div className={styles.title}>{name}</div>
			<div className={styles.description}>{description}</div>
			<div className={styles.price}>{price.toLocaleString()} руб.</div>
		</div>
	)
}

export default Card