import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { menuItems } from './menuItems';
import styles from './Dropdown.module.scss';

const Dropdown = () => {
    return (
        <div
            className={classNames(
                styles.dropdown,
                'custom-dropdown-menu' // Used to trigger when parent is hovered
            )}
        >
            <ul className={styles.wrapper}>
                {menuItems.map((item, index) => {
                    return (
                        <li key={index} className={styles.item}>
                            <Link className={classNames(styles.link, item.cName)} to={item.path}>
                                {item.title}
                            </Link>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Dropdown;
