import * as React from 'react';
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

import {resetCart} from "@/store/cartSlice";

import styles from "./styles.module.scss"

import UiButton from "@/ui/components/UiButton";

const ManageCart = () => {
	let navigate = useNavigate();
	const dispatch = useDispatch();

	const onReset = () => {
		dispatch(resetCart());
	}

	const goShopping = () => {
		navigate('/')
	}

	return (
		<div className={styles.buttons}>
			<div className={styles.button}>
				<UiButton onClick={onReset} theme="light" size="m">Очистить корзину</UiButton>
			</div>
			<div className={styles.button}>
				<UiButton onClick={goShopping} theme="dark" size="m">Продолжить покупки</UiButton>
			</div>
		</div>
	)
}

export default ManageCart