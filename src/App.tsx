import Header from './components/Header';
import List from './components/List';

import styles from './App.module.scss';
import { useState } from 'react';

const TASKS = [
	{
		id: 1,
		text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam deleniti numquam iste.',
		checked: false,
	},
	{
		id: 2,
		text: 'Laboriosam deleniti numquam iste. Lorem ipsum dolor sit amet consectetur adipisicing elit.',
		checked: false,
	},
];

function App() {
	const [tasks, setTasks] = useState(TASKS);

	const checkItem = (id: number) => {
		setTasks((current) =>
			current.map((task) => ({
				...task,
				checked: task.id === id ? !task.checked : task.checked,
			}))
		);
	};

	const deleteItem = (id: number) => {
		setTasks((current) => current.filter((task) => task.id !== id));
	};

	return (
		<div>
			<Header />
			<div className={styles.content}>
				<List tasks={tasks} onCheckItem={checkItem} onDeleteItem={deleteItem} />
			</div>
		</div>
	);
}

export default App;
