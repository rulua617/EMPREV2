import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import Productos from "./Productos";
import Header from "./Header";


function App() {
  const [count, setCount] = useState(0);

  return (
  
      <main >
        <div>
          <Productos />
        </div>
      </main>
  
  );
}

export default App;
