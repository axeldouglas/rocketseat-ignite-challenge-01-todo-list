import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Header from './components/Header';
import Form from './components/Form';
import List from './components/List';

import styles from './App.module.scss';

export type Task = {
	id: string | number;
	text: string;
	checked: boolean;
};

function App() {
	const [tasks, setTasks] = useState<Task[]>([]);

	const checkItem = (id: string | number) => {
		setTasks((current) =>
			current.map((task) => ({
				...task,
				checked: task.id === id ? !task.checked : task.checked,
			}))
		);
	};

	const deleteItem = (id: string | number) => {
		setTasks((current) => current.filter((task) => task.id !== id));
	};

	const createItem = (text: string) => {
		const newItem = {
			id: uuidv4(),
			text,
			checked: false,
		};

		setTasks((current) => [newItem, ...current]);
	};

	return (
		<div>
			<Header />
			<div className={styles.content}>
				<Form onCreateTask={createItem} />
				<List tasks={tasks} onCheckItem={checkItem} onDeleteItem={deleteItem} />
			</div>
		</div>
	);
}

export default App;
