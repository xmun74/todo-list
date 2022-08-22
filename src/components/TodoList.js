import styled from 'styled-components';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

const List = styled.ul`
  margin: 30px 0;
`;

export default function TodoList({ todos, setTodos, setChecked }) {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          id={todo.id}
          text={todo.text}
          checked={todo.checked}
          key={todo.id}
          todos={todos}
          setTodos={setTodos}
          setChecked={setChecked}
        />
      ))}
    </List>
  );
}

TodoList.propTypes = {
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  setChecked: PropTypes.func.isRequired,
};
