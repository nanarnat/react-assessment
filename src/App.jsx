import { useState } from "react";
import Owner from "./views/Owner";
import ViewToggleButton from "./components/ViewToggleButton";
import Home from "./views/Home";


export default function App() {
  const [view, setView] = useState("Home");
  

  return (
    <div className="min-h-screen bg-blue-100">
      <div className=" flex justify-end">
        <ViewToggleButton onClick={() => {
            setView("Home");
          }}>
        Home
        </ViewToggleButton>
        <ViewToggleButton onClick={() => {
            setView("Owner");
          }}>
          Owner
        </ViewToggleButton>
      </div>
      <hr className="border-brown w-full"/>

      <div>
      {view === "Home" && <Home/> } 
      {view === "Owner" && <Owner/> } 
      </div>
    </div>
  );
}
