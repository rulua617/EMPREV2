import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import "./index.css";
import { NextUIProvider } from "@nextui-org/react";
import Header from "./Header";




ReactDOM.render(
  <React.StrictMode>
    <NextUIProvider >
     
        <main className="dark text-foreground bg-background">
          <Header />
          <br />
         
          <App />
        </main>
   
    </NextUIProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
