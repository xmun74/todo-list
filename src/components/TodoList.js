import styled from 'styled-components';
// import TodoItem from './TodoItem';

const List = styled.ul`
  margin: 20px 0;
`;

const TodoList = () => {
  //   console.log(todos);
  return (
    <List>
      {/* {todos.map((todo) => (
        <TodoItem todo={todo} key={todo.id} />
      ))} */}
    </List>
  );
};
export default TodoList;
