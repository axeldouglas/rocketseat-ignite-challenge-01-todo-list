import React from 'react';

import clipboardIcon from '../../assets/img/clipboard.svg';
import styles from './EmptyMessage.module.scss';

const EmptyMessage: React.FC = () => {
	return (
		<div className={styles.container}>
			<img src={clipboardIcon} alt='Clipboard Icon' />
			<p>
				<strong>Você ainda não tem tarefas cadastradas</strong>
			</p>
			<p>Crie tarefas e organize seus itens a fazer</p>
		</div>
	);
};

export default EmptyMessage;
