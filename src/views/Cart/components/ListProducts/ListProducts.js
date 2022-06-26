import * as React from 'react';
import {useSelector} from "react-redux";

import {selectCart} from "@/store/cartSlice";

import CardProduct from "../../components/CardProduct";

import styles from "./styles.module.scss"

const ListProducts = () => {
	const cart = useSelector(selectCart);

	return (
		<div>
			<div className={styles.listHeader}>
				<div>
					Товар
				</div>
				<div>
					К-во
				</div>
			</div>
			<div className={styles.list}>
				{
					cart.map(({id, amount, max, thumb, description, name, price}) => (
						<CardProduct key={id} id={id} amount={amount} max={max} thumb={thumb} price={price} description={description} title={name}/>
					))
				}
			</div>
		</div>
	)
}

export default ListProducts