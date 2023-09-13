import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./components/App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>

    <App />
    {/* <footer>
      <div className="Footer">
      <p>Copywrite 2023</p>
        <ul>
          <li>Contact</li>
          <li>About</li>
        </ul>
      </div>
    </footer> */}
  </BrowserRouter>
);
