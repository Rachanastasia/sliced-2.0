import React from 'react';
import { RiKnifeLine } from 'react-icons/ri'
import Link from 'next/link'
import Button from './Button';
import styles from '../styles/Header.module.css'

function Header() {

    return (
        <header>
                <h1>
                    <div aria-label='Sliced' className={styles.title}>
                        <span>S</span><RiKnifeLine /><span>iced</span>
                    </div>
                </h1>

                <ul className={styles.menu_wrapper}>
                    <li className={styles.menu_item}>
                        <Link href='/login'>
                            <span>login</span>
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link href='/register'>
                            <span>register</span>
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link href='/#about'>
                            <span>about</span>
                        </Link>
                    </li>
                    <li className={styles.menu_item}>
                        <Link href='/#slicer'>
                            <Button text='try it out' buttonStyle={styles.action_button} />
                        </Link>
                    </li>
                </ul>
        </header >
    )

}

export default Header;
