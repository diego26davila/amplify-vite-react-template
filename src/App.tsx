import { useState } from "react";
//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";

import QrReader from '@/react-qr-scanner';

//const client = generateClient<Schema>();


function Test() {

  const [result, setResult] = useState('')

  function handleScan(data) {

    if (data != null) {
      setResult(data.text)
    }

  }

  function handleError(err) {
    console.log(err)
  }

  const previewStyle = {
    height: 240,
    width: 320
  }

  return <div>
    <QrReader
      delay="100"
      style={previewStyle}
      onError={handleError}
      onScan={handleScan}
    />
  <p>{result}</p>
  </div>
}


function App() {

  //const [todos, setTodos] = useState<Array<Schema["Todo"]["type"]>>([]);

  /*
  useEffect(() => {
    client.models.Todo.observeQuery().subscribe({
      next: (data) => setTodos([...data.items]),
    });
  }, []);

  function createTodo() {
    client.models.Todo.create({ content: window.prompt("Todo content") });
  }

  <button onClick={createTodo}>+ new</button>
  <ul>
    {todos.map((todo) => (
      <li key={todo.id}>{todo.content}</li>
    ))}
  </ul>
  
  */

  return (
    <main>
      <h1>My todos</h1>

      <div>
        🥳 App successfully hosted. Try creating a new todo.
        <br />
        <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
          Review next step of this tutorial.
        </a>
        <Test/>
      </div>
    </main>
  );
}

export default App;
