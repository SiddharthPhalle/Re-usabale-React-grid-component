import CustomComp from "./components/CustomComp";
import { shipmentData } from "./Data";
import './App.css'
import { useState } from "react";

function App() {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <div className="App">
      <CustomComp 
        headers = {["Name", "Quantity", "Price", "Shipment status"]} 
        data = {shipmentData} filterOn = "productName" 
        selectedOption = {selectedOption} 
        setSelectedOption = {setSelectedOption} 
        includeAll = {true}
      />
    </div>
  );
}

export default App;
