import { useState } from "react";
const Szamologep = () => {
  const [elso, Setelso] = useState<number>(0);
  const [masodik, Setmasodik] = useState<number>(0);
  const [eredmeny, setEredmeny] = useState<number>(0);
  const [muvelet, setmuvelet] = useState<string>("+");
  const Szamolj = (elso: number, masodik: number) => {
    switch (muvelet) {
      case "+":
        setEredmeny(elso + masodik);
        break;
      case "-":
        setEredmeny(elso - masodik);
        break;
      case "*":
        setEredmeny(elso * masodik);
        break;
      case "/":
        setEredmeny(elso / masodik);
        break;
    }
  };
  return (
    <>
      <div style={{ margin: "auto", backgroundColor: "lightgrey" }}>
        <input
          type="number"
          onChange={(e) => {
            Setelso(Number(e.target.value));
          }}
          placeholder="Első szám"
        />
        <input
          type="number"
          onChange={(e) => {
            Setmasodik(Number(e.target.value));
          }}
          placeholder="Második szám"
        />
        <select name="" id="" onChange={(e) => setmuvelet(e.target.value)}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button onClick={() => Szamolj(elso, masodik)}>
          Calculate or whatever
        </button>
        <p>{eredmeny}</p>
      </div>
    </>
  );
};

export default Szamologep;
