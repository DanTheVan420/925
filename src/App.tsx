import { useState } from "react";
import "./App.css";
import Homerseklet from "./pages/homerseklet";
import Szamologep from "./pages/szamologep";
import BMI from "./pages/bmi";
import Penzvalto from "./pages/penzvalto";

function App() {
  // const submit = () => {
  //   alert("megnyomva3");
  // };
  // const submit2 = (szoveg: string) => {
  //   alert(szoveg);
  // };
  console.log("ize");
  // const [szoveg, setSzoveg] = useState<string>("");
  // const [eredmeny, setEredmeny] = useState<string>("");
  // const [valasztot, setvalasztott] = useState<string>("");

  return (
    <>
      {/* <h1>valami</h1>
      <button
        onClick={() => {
          alert("megnyomva");
        }}
      >
        push
      </button>
      <button
        onClick={() => {
          alert("megnyomva2");
        }}
      >
        push
      </button>
      <button
        onClick={() => {
          submit();
        }}
      >
        push
      </button>
      <button onClick={submit}>push</button>
      <button onClick={() => submit2("ize")}>push</button> */}
      {/* <h2>{szoveg}</h2>
      <h2>{eredmeny}</h2>
      <input
        onChange={(e) => setSzoveg(e.target.value)}
        type="text"
        placeholder="durrants ide valamit"
      />
      <button
        onClick={() =>
          setEredmeny(
            `A megadott szöveg: ${szoveg}, a választott opciaió ${valasztot}`,
          )
        }
      >
        akarmi
      </button>
      <select name="" id="">
        <option value="elso">elso</option>
        <option value="masodik">elso</option>
      </select> */}
      <Homerseklet></Homerseklet>
      <Szamologep />
      <BMI />
      <Penzvalto></Penzvalto>
    </>
  );
}

export default App;
