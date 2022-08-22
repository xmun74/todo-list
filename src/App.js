import { createGlobalStyle } from 'styled-components';
import Header from './components/Header';
import Layout from './Layout';

const GlovalStyle = createGlobalStyle`
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  border: 0;
}`;

function App() {
  return (
    <>
      <GlovalStyle />
      <Header />
      <Layout />
    </>
  );
}

export default App;
