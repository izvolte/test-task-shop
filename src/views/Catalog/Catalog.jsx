import * as React from 'react';

import UiSelect from "@/ui/components/UiSelect";

import styles from "./styles.module.scss"

import {INITIAL_SORT_VALUE, sorts} from "./constants";


const Catalog = () => {
	const [sort, setSort] = React.useState(INITIAL_SORT_VALUE)

	return (
		<>
			<div className={styles.sort}>
				<UiSelect prefix={'Порядок: '} options={sorts} value={sort} onSelect={setSort}/>
			</div>
		</>
	)
}

export default Catalog