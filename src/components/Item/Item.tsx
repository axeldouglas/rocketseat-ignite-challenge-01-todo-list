import React, { useState } from 'react';
import { Trash, Check } from 'phosphor-react';
import classNames from 'classnames/bind';

import styles from './Item.module.scss';
import { Task } from '../List/List';

const cx = classNames.bind(styles);

interface ItemProps extends Task {
	onCheckItem: (id: number) => void;
	onDeleteItem: (id: number) => void;
};

const Item: React.FC<ItemProps> = ({id, text, checked, onCheckItem, onDeleteItem}) => {
	const handleCheckItem = () => {
		onCheckItem(id);
	};

	const handleDeleteItem = () => {
		onDeleteItem(id);
	};

	return (
		<div className={cx('item', { checked })}>
			<button className={styles.checkbox} title='Check Item' onClick={handleCheckItem}>
				<Check size={12} />
			</button>
			<div className={styles.content}>
				<p>{text}</p>
			</div>
			<button className={styles.deleteButton} title='Delete Item' onClick={handleDeleteItem}>
				<Trash size={24} />
			</button>
		</div>
	);
};

export default Item;
