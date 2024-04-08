import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <main>
        <div className="bg-[#dadbf1] pt-24 pb-48 flex flex-col justify-center items-center">
          <p className="text-7xl">How can we help?</p>
          <div>
            <form action="">
              <input className="bg-white" type="text" />
              <button>:v</button>
            </form>
          </div>
        </div>
        <div className="flex justify-between p-64">
          <div className="flex-col">
            <Card />
            <Card />
            <Card />
          </div>
          <div className="flex-col">
            <Card />
            <Card />
            <Card />
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

export default App;
