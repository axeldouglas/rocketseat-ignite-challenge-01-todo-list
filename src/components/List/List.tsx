import React from 'react';
import { Task } from '../../App';
import Item from '../Item';
import EmptyMessage from '../EmptyMessage';

import styles from './List.module.scss';

type ListProps = {
	tasks: Task[];
	onCheckItem: (id: string | number) => void;
	onDeleteItem: (id: string | number) => void;
};

const List: React.FC<ListProps> = ({ tasks, onCheckItem, onDeleteItem }) => {
	const tasksQuantity = tasks?.length || 0;
	const checkedTasksQuantity =
		tasks?.reduce((acc, cur) => {
			if (cur.checked) {
				return acc + 1;
			}
			return acc;
		}, 0) || 0;

	return (
		<div className={styles.list}>
			<header>
				<div>
					<p>Tarefas criadas</p>
					<span>{tasksQuantity}</span>
				</div>
				<div>
					<p>Concluídas</p>
					<span>
						{tasksQuantity ? `${checkedTasksQuantity} de ${tasksQuantity}` : 0}
					</span>
				</div>
			</header>
			{!!tasksQuantity &&
				tasks.map((task) => (
					<Item
						key={task.id}
						onCheckItem={onCheckItem}
						onDeleteItem={onDeleteItem}
						{...task}
					/>
				))}

			{!tasksQuantity && <EmptyMessage />}
		</div>
	);
};

export default List;
