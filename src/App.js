// import './App.css';
// import Header  from "./MyComponents/Header";
// import { Footer } from "./MyComponents/Footer";
// import { Todos } from "./MyComponents/Todos";
// import { AddTodo } from "./MyComponents/AddTodo";
//import { Components } from "./ComponentsPractice/Components";
import React, { useState, useEffect } from "react";
import HomePage from "./ComponentsPractice/HomePage";
import ResponsiveLanding from "./ComponentsPractice/ResponsiveLanding";

// import JaivikApnaoHome from "./JaivikApnaao/JaivikApnaoHome";
// import EmployeeHome from "./EmployeeMgmt/EmployeeHome";
import ProductCard from "./ComponentsPractice/NavBar";

function App() {
  // let initTodo;
  // if(localStorage.getItem("todos") === null){
  //   initTodo = [];
  // }
  // else{
  //   initTodo = JSON.parse(localStorage.getItem("todos"));
  // }
  // const onDelete = (todo)=>{
  //   console.log("I am on delete of todo", todo);

  //   setTodos(todos.filter((e)=>{
  //       return e !== todo;
  //   }));

  //   localStorage.setItem("todos", JSON.stringify(todos));
  // }

  // const addTodo = (title,desc)=>{
  //   console.log("You have added todo", title,desc);
  //   let sno;
  //   if(todos.length === 0){
  //     sno = 1;
  //   }
  //   else{
  //     sno = todos[todos.length-1].sno + 1;
  //   }
  //   const myTodo ={
  //     sno: sno,
  //     title: title,
  //     desc: desc
  //   };
  //   setTodos([...todos, myTodo]);
  //   console.log(myTodo);

  // }
  // const [todos, setTodos] = useState(initTodo);
  // useEffect(()=>{localStorage.setItem("todos", JSON.stringify(todos));},[todos]);
  return (
    <>
      {/* <Header title = "ToDosList" searchBar={false}/>
      <AddTodo addTodo={addTodo}/>
      <Todos todos={todos} onDelete={onDelete}/>
      <Footer/> */}
      {/* <JaivikApnaoHome/> */}
      {/* <EmployeeHome /> */}
      {/* <NavBar /> */}
      {/* <div>
        <ProductCard
          name="Product 1"
          description="This is a description of product 1."
          imageUrl="https://picsum.photos/id/1/200/300"
        />
        <ProductCard
          name="Product 2"
          description="This is a description of product 2."
          imageUrl="https://picsum.photos/id/2/200/300"
        />
        <ProductCard
          name="Product 3"
          description="This is a description of product 3."
          imageUrl="https://picsum.photos/id/3/200/300"
        />
      </div> */}
      {/* <HomePage /> */}
      <ResponsiveLanding />
    </>
  );
}

export default App;
