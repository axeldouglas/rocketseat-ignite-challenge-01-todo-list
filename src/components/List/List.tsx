import React from 'react';
import Item from '../Item';

import styles from './List.module.scss';

export type Task = {
	id: number;
	text: string;
	checked: boolean;
};

type ListProps = {
	tasks: Task[];
	onCheckItem: (id: number) => void;
	onDeleteItem: (id: number) => void;
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
						{checkedTasksQuantity} de {tasksQuantity}
					</span>
				</div>
			</header>
			{tasks.map((task) => (
				<Item
					key={task.id}
					onCheckItem={onCheckItem}
					onDeleteItem={onDeleteItem}
					{...task}
				/>
			))}
		</div>
	);
};

export default List;