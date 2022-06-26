import * as React from 'react';

import styles from "./styles.module.scss"

const UiInput = ({value, onInput, placeholder}) => {
	return (
		<input className={styles.input} placeholder={placeholder} value={value} onInput={({target}) => onInput(target.value)} type="text"/>
	)
}

export default UiInput