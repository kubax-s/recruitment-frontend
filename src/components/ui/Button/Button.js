import styles from './Button.module.scss';

const Button = ({ children, secondary = false, type = '', onClick = () => {} }) => 
    <button 
        className={secondary ? styles.secondary : styles.primary}
        onClick={onClick}
        type={type}
    >
        { children }
    </button>

export default Button
