import * as React from 'react';

import styles from "./styles.module.scss"

const UiButton = ({onClick = () => null, type = 'button', children, theme = 'light', size = 'm'}) => {

	const className = [
		styles.button,
		theme === 'light' ? styles.light : styles.dark,
		size === 'm' ? styles.sizeM : styles.sizeL
	]

	return (
		<button onClick={onClick} className={className.join(' ')} type={type}>
			{children}
		</button>
	)
}

export default UiButton