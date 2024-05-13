import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Navbar from "./components/Navbar.tsx";
import { ArrowRightFromLine } from "lucide-react";

const CustomeRoot = () => {
  const [isOpen, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!isOpen);
  };

  return (
    <div className="flex">
      <Navbar toggle={toggle} isOpen={isOpen} />
      <div className="grow">
        <span
          onClick={toggle}
          className="text-gray-600 lg:hidden hover:text-gray-700 cursor-pointer"
        >
          {" "}
          <ArrowRightFromLine />
        </span>
        <App />
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CustomeRoot />
  </React.StrictMode>
);
