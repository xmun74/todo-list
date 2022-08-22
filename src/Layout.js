import { useState } from 'react';
import styled from 'styled-components';
import TodoList from './components/TodoList';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
`;
const Form = styled.form``;
const Input = styled.input`
  border: 1px solid grey;
  border-radius: 1rem;
  width: 500px;
  height: 50px;

  ::placeholder {
    text-align: center;
    font-size: 1.2rem;
  }
`;

export default function Layout() {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: '공부하기',
      checked: false,
    },
  ]);
  const [text, setText] = useState('');
  const [checked, setChecked] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      text,
      checked,
    };
    setTodos([...todos, newTodo]);
    setText('');
    console.log(todos);
  };

  return (
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          type="text"
          placeholder="Write a To do"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </Form>
      <TodoList todos={todos} setChecked={setChecked} />
    </Container>
  );
}
