import { Provider } from 'react-redux';
import store from './store';
import { Layout } from 'components/layout';
import { TodoForm, TodoList } from 'components/features';

const App = () => {
  return (
    <Provider store={store}>
      <Layout>
        <TodoList />
        <TodoForm />
      </Layout>
    </Provider>
  );
}

export default App;
