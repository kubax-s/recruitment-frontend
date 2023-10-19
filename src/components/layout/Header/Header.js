import logo from 'static/svg/logo.svg';
import styles from './Header.module.scss'

const Header = () => {

    return (
        <header className={styles.header}>
            <img src={logo} alt="Avalio logo" />
            <h1>To-do list</h1>
        </header>
    )
}

export default Header
