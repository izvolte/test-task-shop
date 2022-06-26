import * as React from 'react';

import styles from "./styles.module.scss"


const UiSelect = ({options, onSelect, value, prefix}) => {

	return (
		<select className={styles.select} onChange={({target}) => onSelect(target.value)} value={value}>
			{
				options.map(({value, label}, index) => (
					<option key={index} value={value}>{prefix}{label}</option>
				))
			}
		</select>
	)
}

export default UiSelect