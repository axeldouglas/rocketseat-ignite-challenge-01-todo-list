import Header from './components/Header';
import Item from './components/Item';

import styles from './App.module.scss';

function App() {

	return (
		<div>
			<Header />
			<div className={styles.content}>
				<Item />
				<Item />
			</div>
		</div>
	);
}

export default App;
