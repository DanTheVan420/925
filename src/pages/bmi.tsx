import { useRef, useState } from "react";

const BMI = () => {
  const suly = useRef(null);
  const mag = useRef(null);

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
        <input type="text" ref={suly} placeholder="Suly (kg)" />
        <input type="text" ref={mag} placeholder="Magassag (cm)" />
        <button
          onClick={() => calculate(suly.current.value, mag.current.value)}
        >
          nyomassad g
        </button>
        <p>{eredmeny}</p>
      </div>
    </>
  );
};

export default BMI;
