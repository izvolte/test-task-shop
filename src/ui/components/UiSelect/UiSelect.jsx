import * as React from 'react';

import styles from "./styles.module.scss"

const UiSelect = ({options, onSelect, value, prefix}) => {
	return (
		<select className={styles.select} onSelect={onSelect} value={value} name="sort">
			{
				options.map(({value, label}, index) => (
					<option key={index} value={value}>{prefix}{label}</option>
				))
			}
		</select>
	)
}

export default UiSelect