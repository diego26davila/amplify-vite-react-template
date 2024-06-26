//import type { Schema } from "../amplify/data/resource";
//import { generateClient } from "aws-amplify/data";
//const client = generateClient<Schema>();

import { useState } from "react";

import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";

import QrReader from 'react-qr-scanner';

function Test() {

  const [result, setResult] = useState('')

  function handleScan(data: any) {

    if (data != null) {

      setResult(data.text)

      const url = `https://pucp.kissflow.com/integration/2/AcUgoqK4pdde/webhook/dmIrPurVm53SELIHRrjbBzfyJqUBBHbz6TPxd-usw-3RxLl-fJdVNSy45kKB8hlH3vkbJ5H6l1pwiRBPMrzq9A?key=${data.text}`

      fetch(url).then(
        (data) => {
          console.log(data)
        }
      )

    }

  }

  function handleError(err: any) {
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
      facingMode="front"
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

    <Authenticator>

      {({signOut}) => (

        <main>
          <h1>Registro de Asistencias</h1>
          <div>
            <a href="https://docs.amplify.aws/react/start/quickstart/#make-frontend-updates">
              Sistema de Bibliotecas PUCP
            </a>
            <Test/>
          </div>
          <button onClick={signOut}>Sign out</button>
        </main>

      )}

    </Authenticator>
  );
}

export default App;
