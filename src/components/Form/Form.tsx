import React, {
	ChangeEvent,
	FormEvent,
	InputHTMLAttributes,
	useState,
} from 'react';
import { PlusCircle } from 'phosphor-react';

import styles from './Form.module.scss';

type FormProps = {
    onCreateTask: (task: string) => void;
}

const Form: React.FC<FormProps> = ({ onCreateTask }) => {
	const [task, setTask] = useState('');

	const handleChangeTaskText = (e: ChangeEvent<HTMLInputElement>) => {
		setTask(e.target.value);
	};

	const handleCreateTask = (e: FormEvent) => {
		e.preventDefault();
		onCreateTask(task);
		setTask('');
	};

	return (
		<form className={styles.form}>
			<input
				type='text'
				name='task'
				placeholder='Adicione uma nova tarefa'
				value={task}
				onChange={handleChangeTaskText}
			/>
			<button type='submit' title='Create new task' onClick={handleCreateTask}>
				Criar <PlusCircle size={16} />
			</button>
		</form>
	);
};

export default Form;
