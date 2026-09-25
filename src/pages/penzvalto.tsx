import { useRef, useState } from "react";

const Penzvalto = () => {
  const forint = useRef(null);

  const [eredmeny, seteredmeny] = useState<string>("");
  const muvelet = useRef(null);
  const calculate = (forint: number) => {
    if (muvelet.current.value == "dollar") {
      seteredmeny(`${forint} forint = ${forint / 350} dollár`);
    } else {
      seteredmeny(`${forint} forint = ${forint / 380} euró`);
    }
  };
  return (
    <>
      <div style={{ margin: "auto", backgroundColor: "lightgrey" }}>
        <input type="number" ref={forint} placeholder="Forint" />
        <select name="" id="" ref={muvelet}>
          <option value="dollar">dollar</option>
          <option value="euro">euro</option>
        </select>
        <button onClick={() => calculate(forint.current.value)}>
          szamits xddd
        </button>
        <p>{eredmeny}</p>
      </div>
    </>
  );
};
export default Penzvalto;
