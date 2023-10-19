import { useSelector } from 'react-redux';
import { TodoItem } from 'components/features';
import styles from './TodoList.module.scss';

const TodoList = () => {
    const todos = useSelector(state => state.todo.todo)
    
    return (
        <ul className={styles.list}>
            { todos.length >= 1 && todos.toSorted((a, b) => a.completed - b.completed).map(todo => <TodoItem data={todo} key={todo.id} />) }
            { todos.length === 0 && <li className={styles.empty}>The list is empty. Click on the button below to add a new task...</li> }
        </ul>
    )
}

export default TodoList
