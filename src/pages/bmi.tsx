import { useState } from "react";

const BMI = () => {
  const [suly, setsuly] = useState<number>(0);
  const [mag, setmag] = useState<number>(0);
  const [eredmeny, seteredmeny] = useState<string>("");
  const calculate = (s, m) => {
    const bmi = s / Math.pow(m / 100, 2);
    if (bmi < 16) {
      seteredmeny(`Súlyos soványság ${bmi}`);
    }
    if (bmi < 17 && bmi >= 16) {
      seteredmeny(`Mérsékelt soványság ${bmi}`);
    }
    if (bmi < 18.5 && bmi >= 17) {
      seteredmeny(`enyhe soványság ${bmi}`);
    }
    if (bmi < 25 && bmi >= 18.5) {
      seteredmeny(`normál testsúly ${bmi}`);
    }
    if (bmi < 30 && bmi >= 25) {
      seteredmeny(`túlysúlyos ${bmi}`);
    }
    if (bmi < 35 && bmi >= 30) {
      seteredmeny(`elhízott I. ${bmi}`);
    }
    if (bmi < 40 && bmi >= 35) {
      seteredmeny(`elhízott II. ${bmi}`);
    }
    if (bmi >= 40) {
      seteredmeny(`elhízott III. ${bmi}`);
    }
  };
  return (
    <>
      {" "}
      <div style={{ margin: "auto", backgroundColor: "lightgrey" }}>
        <input
          type="text"
          onChange={(e) => setsuly(Number(e.target.value))}
          placeholder="Suly (kg)"
        />
        <input
          type="text"
          onChange={(e) => setmag(Number(e.target.value))}
          placeholder="Magassag (cm)"
        />
        <button onClick={() => calculate(suly, mag)}>nyomassad g</button>
        <p>{eredmeny}</p>
      </div>
    </>
  );
};

export default BMI;
