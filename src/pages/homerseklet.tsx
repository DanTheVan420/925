import { useState } from "react";
const Homerseklet = () => {
  const [Celsius, setCelsius] = useState<number>(0);
  const [Fah, setFah] = useState<number>(0);
  const [Kelv, setKelv] = useState<number>(0);
  return (
    <>
      <div style={{ margin: "auto", backgroundColor: "lightgrey" }}>
        <input
          type="number"
          placeholder="celsius"
          onChange={(e) => setCelsius(Number(e.target.value))}
        />
        <p>
          {Fah} Fahrenheit <br /> {Kelv} Kelvin
        </p>
        <button
          onClick={() => {
            setFah(Celsius * 1.8 + 32);
            setKelv(Celsius + 273.15);
          }}
        >
          szamitas
        </button>
      </div>
    </>
  );
};

export default Homerseklet;
