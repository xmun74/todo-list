import styled from 'styled-components';

const TodoItemBlock = styled.li``;
const Text = styled.span``;
const DeleteBtn = styled.button`
  background-color: white;
  margin-left: 10px;
  cursor: pointer;
`;
const EditBtn = styled(DeleteBtn)``;

export default function TodoItem() {
  return (
    <TodoItemBlock>
      <Text></Text>
      <EditBtn>🖍</EditBtn>
      <DeleteBtn>❌</DeleteBtn>
    </TodoItemBlock>
  );
}
