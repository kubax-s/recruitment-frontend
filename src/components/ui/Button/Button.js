import styles from './Button.module.scss';

const Button = ({ 
        children, 
        secondary = false, 
        ...rest 
    }) => 
    <button 
        className={secondary ? styles.secondary : styles.primary}
        {...rest}
    >
        { children }
    </button>

export default Button
