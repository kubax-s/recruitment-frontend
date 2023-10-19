import styles from './TextInput.module.scss';

const TextInput = ({ placeholder = '', value = '', onChange = () => {} }) => 
    <input 
        className={styles.input} 
        onChange={onChange}
        placeholder={placeholder}
        type="text"
        value={value}
        maxLength={75}
    />

export default TextInput
