import styled from 'styled-components';
import PropTypes from 'prop-types';

const TodoItemBlock = styled.li`
  display: flex;
  width: 500px;
  align-items: center;
  justify-content: center;
  margin: 16px 0;
  font-size: 1.3rem;
`;
const Text = styled.span`
  flex: 2;
  margin-left: 10px;
`;
const DeleteBtn = styled.button`
  background-color: white;
  margin-left: 10px;
  cursor: pointer;
`;
const EditBtn = styled(DeleteBtn)``;
const CheckBtn = styled(DeleteBtn)``;

export default function TodoItem({ id, text, checked }) {
  return (
    <TodoItemBlock key={id}>
      {checked ? <CheckBtn>✅</CheckBtn> : <CheckBtn>❎</CheckBtn>}
      <Text>{text}</Text>
      <EditBtn>🖍</EditBtn>
      <DeleteBtn>❌</DeleteBtn>
    </TodoItemBlock>
  );
}
TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
  checked: PropTypes.bool.isRequired,
  todos: PropTypes.array.isRequired,
  setTodos: PropTypes.func.isRequired,
  setChecked: PropTypes.func.isRequired,
};
