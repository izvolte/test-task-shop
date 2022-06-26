import * as React from 'react';
import {useDispatch} from "react-redux";

import UiCounter from "@/ui/components/UiCounter";

import styles from "./styles.module.scss"
import {changeAmount, remove} from "@/store/cartSlice";

const CardProduct = ({title, thumb, description, price, amount, max, id}) => {
	const dispatch = useDispatch();

	const onChange = (amount) => {
		dispatch(changeAmount({id, amount}));
	}

	const onDelete = () => {
		dispatch(remove(id));
	}

	return (
		<div className={styles.card}>
			<img alt="изображение товара" src={thumb}  className={styles.thumb}/>
			<div className={styles.info}>
				<div className={styles.title}>{title}</div>
				<div className={styles.description}>{description}</div>
				<div className={styles.price}>{(price * amount).toLocaleString()} руб.</div>
				<div className={styles.delete} onClick={onDelete}>Удалить</div>
			</div>
			<div className={styles.counter}>
				<UiCounter max={max} value={amount} onChange={onChange}/>
			</div>
		</div>
	)
}

export default CardProduct