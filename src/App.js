import './App.css';
import Header from './myComponents/Header';
import Todos from './myComponents/Todos';
import Footer from './myComponents/Footer';
import React, {useState} from 'react';

function App() {
 const onDelete=(todo) => {
  console.log('I am on delete of ',todo) ;

  // It won't work
  // let index=todos.indexOf(todo);
  // todos.splice(index,1)

 setTodos(todos.filter((e)=>{
  return e!==todo;
 }))
 }
  const [todos,setTodos] =useState( [
    {
      title: "Go to the market",
      desc: "You need to go to the market"
    },

    {
      title: "Go to the school",
      desc: "You need to go to the school"
    },
    {

      title: "Go to the hospital",
      desc: "You need to go to the hospital"
    }

  ])
  return (<>
    <Header title="my Todo list" searchBar={false}/>
    <Todos todos={todos} onDelete={onDelete}/>
    <Footer/>

  </>

  );
}

export default App;
