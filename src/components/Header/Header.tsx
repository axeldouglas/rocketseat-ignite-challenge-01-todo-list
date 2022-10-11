import React from 'react';

import logo from "../../assets/img/logo.svg";

import styles from './Header.module.scss';

const Header: React.FC = () => {
	return <header className={styles.header}>
        <img src={logo} alt="ToDo List Logo" />
    </header>;
};

export default Header;
