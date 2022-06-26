import * as React from 'react';
import ListProducts from "./components/ListProducts";
import ManageCart from "./components/ManageCart";
import CartForm from "./components/CartForm";


import styles from "./styles.module.scss"
import {useSelector} from "react-redux";
import {selectCart} from "@/store/cartSlice";

const Cart = () => {
	const cart = useSelector(selectCart);

	return (
		!!cart.length ?	(
			<div className={styles.cart}>
			<div>
				<div className={styles.list}>
					<ListProducts/>
				</div>
				<ManageCart/>
			</div>
			<CartForm/>
		</div>
		) : 'Корзина пуста'
	)
}

export default Cart