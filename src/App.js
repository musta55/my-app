import './App.css';
import Header from './myComponents/Header';
import Todos from './myComponents/Todos';
import Footer from './myComponents/Footer';

function App() {
  let myVar = 345;
  return (<>
    <Header title="my Todo list" searchBar={false}/>
    <Todos />
    <Footer/>

  </>

  );
}

export default App;
