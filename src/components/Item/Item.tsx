import React, { useState } from 'react';
import { Trash, Check } from 'phosphor-react';
import classNames from 'classnames/bind';

import styles from './Item.module.scss';

const cx = classNames.bind(styles);

const Item: React.FC = () => {
	const [checked, setChecked] = useState(false);

	const handleCheckItem = () => {
		setChecked((current) => !current);
	};

	return (
		<div className={cx('item', { checked })}>
			<button className={styles.checkbox} title='Check Item' onClick={handleCheckItem}>
				<Check size={12} />
			</button>
			<div className={styles.content}>
				<p>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore,
					consequatur.
				</p>
			</div>
			<button className={styles.deleteButton} title='Delete Item'>
				<Trash size={24} />
			</button>
		</div>
	);
};

export default Item;
