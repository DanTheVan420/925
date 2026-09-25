import { useRef, useState } from "react";
const Homerseklet = () => {
  const Celsius = useRef(null);

  const [Fah, setFah] = useState<number>(0);
  const [Kelv, setKelv] = useState<number>(0);
  return (
    <>
      <div style={{ margin: "auto", backgroundColor: "lightgrey" }}>
        <input type="number" placeholder="celsius" ref={Celsius} />
        <p>
          {Fah} Fahrenheit <br /> {Kelv} Kelvin
        </p>
        <button
          onClick={() => {
            setFah(Celsius.current.value * 1.8 + 32);
            setKelv(Celsius.current.value / +"1" + 273.15);
          }}
        >
          szamitas
        </button>
      </div>
    </>
  );
};

export default Homerseklet;
