import * as React from 'react';

import styles from "./styles.module.scss"

import {ReactComponent as UpIcon} from '@/assets/icons/up.svg';
import {ReactComponent as DownIcon} from '@/assets/icons/down.svg';

const UiCounter = ({value, onChange, max = 1, min = 1}) => {

	const increment = () => {
		if(value < max) onChange(value + 1)
	}

	const decrement = () => {
		if(value > min) onChange(value - 1)
	}

	return (
		<div className={styles.counter}>
			<div className={styles.number}>{value}</div>
			{
				value < max && <UpIcon onClick={increment} className={styles.up}/>
			}
			{
				value > min && <DownIcon onClick={decrement} className={styles.down}/>
			}
		</div>
	)
}

export default UiCounter