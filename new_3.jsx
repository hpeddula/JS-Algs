import "./styles.css";
import { useState, useEffect } from "react";
// https://jsonplaceholder.typicode.com/

const data = [
  {
    userId: 1,
    id: 1,
    title: "delectus aut autem",
    completed: false
  },
  {
    userId: 1,
    id: 2,
    title: "quis ut nam facilis et officia qui",
    completed: false
  }
];
const useFetch = (url) => {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((data) => data.json())
      .then((res) => {
        Array.isArray(res) ? setTodos([...res]) : setTodos([]);
      });
  }, [url]);
  return todos;
};
export default function App() {
  // const [todos, setTodos] = useState([]);
  // const [error, setErrorMessage] = useState("");

  // const fetchTodos = async () => {
  //   const data = await fetch("https://jsonplaceholder.typicode.com/todos");
  //   const todos = await data.json();
  // };
  const todos = useFetch("https://jsonplaceholder.typicode.com/todos");
  useEffect(() => {
    //   fetch("https://jsonplaceholder.typicode.com/todos")
    //     .then((data) => data.json())
    //     .then((res) => setTodos([...res]));
    // const fetchTodos = async () => {
    //   const data = await fetch("https://jsonplaceholder.typicode.com/todos");
    //   const todos = await data.json();
    //   setTodos([...todos]);
    // };
    // fetchTodos();
    return () => {};
  }, []);
  return (
    <div className="App">
      <h1>app</h1>
      {todos.map(({ title }, index) => (
        <div key={index}>{title}</div>
      ))}
    </div>
  );
}




function person() {
	this.name;
	this.age;
	return {
		getInfo: function(company) {
			return `${this.age} ${this.name} ${company}`
		}
	}

}