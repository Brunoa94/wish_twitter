import logo from './logo.svg';
import './App.css';
import LeftNavbar from './LeftNavbar';
import Container from './Container';
import RightNavbar from './RightNavbar';

function App() {
  return (
    <div className="App">
      <LeftNavbar></LeftNavbar>
      <Container></Container>
      <RightNavbar></RightNavbar>
    </div>
  );
}

export default App;
