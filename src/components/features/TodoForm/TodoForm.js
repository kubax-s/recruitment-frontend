import { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import styles from './TodoForm.module.scss';
import { Button, TextInput } from 'components/ui';
import { FaPlus, FaXmark } from "react-icons/fa6";
import { addTodo } from 'store/slices/todoSlice';
import { useModal } from 'hooks';

const TodoForm = () => {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const { isOpen, openModal, closeModal } = useModal()

    const handleSubmit = useCallback(e => {
        e.preventDefault()
        if (value.trim() === '') return
        dispatch(addTodo(value))
        closeModal()
        setValue('')
    }, [value, dispatch, closeModal])

    return (
        <>  
            <Button onClick={openModal} data-testid="open-modal">
                <FaPlus />
            </Button>
            { isOpen && (
                <div className={styles.mask}>
                    <div className={styles.modal} data-testid="modal">
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <TextInput onChange={e => setValue(e.target.value)} placeholder="Add new task..." value={value} data-testid="text-input" />
                            <Button secondary={true} type="submit" data-testid="submit-button">
                                <FaPlus />
                            </Button>
                        </form>
                        <div className={styles.close}>
                            <Button onClick={closeModal} data-testid="close-modal">
                                <FaXmark />
                            </Button>
                        </div>
                    </div>
                </div>
            ) }
        </>
    )
}

export default TodoForm
