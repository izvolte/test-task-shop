import * as React from 'react';
import {useDispatch, useSelector} from "react-redux";

import UiSelect from "@/ui/components/UiSelect";
import {getProducts} from "@/api/mock";

import styles from "./styles.module.scss"

import {INITIAL_SORT_VALUE, sorts} from "./constants";

import Card from "@/components/Card";
import {add, selectCart} from "@/store/cartSlice";


const Catalog = () => {

	const cart = useSelector(selectCart);
	const dispatch = useDispatch();

	const [sort, setSort] = React.useState(INITIAL_SORT_VALUE)
	const [products, setProducts] = React.useState([])

	React.useEffect(() => {
		getProducts().then((products) => {
			setProducts(products)
		})
	}, [])

	const filteredProducts = products.sort((a, b) => {
		return sort === 'ASC'
			? new Date(a.date) - new Date(b.date)
			: new Date(b.date) - new Date(a.date)
	})

	const onAddCart = (id) => {
		dispatch(add(id))
	}

	console.log(cart);

	return (
		<>
			<div className={styles.sort}>
				<UiSelect prefix={'Порядок: '} options={sorts} value={sort} onSelect={setSort}/>
			</div>
			<div className={styles.list}>
				{
					filteredProducts.map(({id, name, description, thumb, price}) => (
						<Card addCart={() => onAddCart(id)} key={id} name={name} price={price} description={description} thumb={thumb}/>
					))
				}
			</div>
		</>
	)
}

export default Catalog