import { data } from "./data/data";
import { useState } from "react";
import ImcCalc from './components/ImcCalc'
import Footer from './components/Footer'
import './App.css'
import ImcTable from "./components/ImcTable";

function App() {
  const calcImc = (e, height, weight) => {
    e.preventDefault();
    console.log(height, weight)
    if (!height || !weight) return;
    const heightFloat = +height.replace(",", ".");
    const weightFloat = +weight.replace(",", ".");
    const imcResult = (weightFloat / (heightFloat * heightFloat)).toFixed(1);
    console.log("Executado");
    console.log(imcResult);
    setImc(imcResult);
    data.forEach((item) => {
      if (imcResult >= item.min && imcResult <= item.max) {
        setInfo(item.info);
        setInfoClass(item.infoClass);
      };
    });
    if (!info) return;
  };
  const resetCalc = (e) => {
    e.preventDefault();
    setImc("");
    setInfo("");
    setInfoClass("");
  };
  const [imc, setImc] = useState("");
  const [info, setInfo] = useState("");
  const [infoClass, setInfoClass] = useState("");
  return (
    <>
      <div className="container">
        {!imc ? (
          <ImcCalc calcImc={calcImc}/>
          ) : (
          <ImcTable 
            data={data} 
            imc={imc} 
            info={info} 
            infoClass={infoClass} 
            resetCalc={resetCalc}
          />
        )}
      </div>
      <Footer />
    </>
  )
}

export default App
