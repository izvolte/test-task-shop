import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import UiInput from "@/ui/components/UiInput";
import UiButton from "@/ui/components/UiButton";

import styles from "./styles.module.scss"

import {selectCart, resetCart} from "@/store/cartSlice";

const CartForm = () => {
	const dispatch = useDispatch();
	const cart = useSelector(selectCart);

	const [name, setName] = React.useState('')
	const [phone, setPhone] = React.useState('')
	const [address, setAddress] = React.useState('')


	const sum = React.useMemo(() => {
		return cart.reduce((sum, {amount, price}) => sum + (price * amount), 0);
	}, [cart])

	const resetForm = () => {
		setName('');
		setPhone('');
		setAddress('');
	}

	const onSubmit = (e) => {
		e.preventDefault();
		resetForm();
		dispatch(resetCart());
		alert('Заказ совершен успешно')
	}

	return (
		<form onSubmit={onSubmit} className={styles.form}>
			<div className={styles.formTitle}>
				Оформление заказа
			</div>
			<div className={styles.formItem}>
				<UiInput value={name} onInput={setName} placeholder="Имя Фамилия"/>
			</div>
			<div className={styles.formItem}>
				<UiInput value={phone} onInput={setPhone} placeholder="Телефон"/>
			</div>
			<div className={styles.formItem}>
				<UiInput value={address} onInput={setAddress} placeholder="Адрес доставки"/>
			</div>
			<div className={styles.sum}>Итого: <span>{sum.toLocaleString()} руб.</span></div>
			<div className={styles.button}>
				<UiButton size="l" type="submit">Оформить заказ</UiButton>
			</div>
		</form>
	)
}

export default CartForm