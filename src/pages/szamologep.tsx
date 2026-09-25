import { useRef, useState } from "react";
const Szamologep = () => {
  const elso = useRef(null);
  const masodik = useRef(null);

  const [eredmeny, setEredmeny] = useState<number>(0);
  const muvelet = useRef(null);
  const Szamolj = (elso: number, masodik: number) => {
    switch (muvelet.current.value) {
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
        <input type="number" ref={elso} placeholder="Első szám" />
        <input ref={masodik} placeholder="Második szám" />
        <select name="" id="" ref={muvelet}>
          <option value="+">+</option>
          <option value="-">-</option>
          <option value="*">*</option>
          <option value="/">/</option>
        </select>
        <button
          onClick={() => Szamolj(elso.current.value, masodik.current.value)}
        >
          Calculate or whatever
        </button>
        <p>{eredmeny}</p>
      </div>
    </>
  );
};

export default Szamologep;
