import { useDispatch } from 'react-redux';
import styles from './TodoItem.module.scss';
import { Button } from 'components/ui';
import { FaCheck, FaRegTrashCan, FaXmark } from 'react-icons/fa6';
import { deleteTodo, toggleTodo } from 'store/slices/todoSlice';

const TodoItem = ({ data }) => {
    const dispatch = useDispatch();

    return (
        <li className={`${styles.item} ${data.completed && styles.completed}`}>
            <span>{ data.text }</span>
            <div>
                <Button onClick={() => dispatch(deleteTodo(data.id))}>
                    <FaRegTrashCan />
                </Button>
                <Button onClick={() => dispatch(toggleTodo(data.id))}>
                    { data.completed ? <FaXmark /> : <FaCheck /> }
                </Button>
            </div>
        </li>
    )
}

export default TodoItem
