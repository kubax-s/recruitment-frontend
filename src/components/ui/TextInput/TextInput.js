import styles from './TextInput.module.scss';

const TextInput = ({ 
        ...rest 
    }) => 
    <input 
        className={styles.input} 
        type="text"
        maxLength={75}
        {...rest}
    />

export default TextInput
