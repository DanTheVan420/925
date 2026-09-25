import { useState } from "react";

const Penzvalto = () => {
  const [forint, setforint] = useState<number>(0);

  const [eredmeny, seteredmeny] = useState<string>("");
  const [muvelet, setmuvelet] = useState<string>("dollar");
  const calculate = (forint: number) => {
    if (muvelet == "dollar") {
      seteredmeny(`${forint} forint = ${forint / 350} dollár`);
    } else {
      seteredmeny(`${forint} forint = ${forint / 380} euró`);
    }
  };
  return (
    <>
      <div style={{ margin: "auto", backgroundColor: "lightgrey" }}>
        <input
          type="number"
          onChange={(e) => setforint(Number(e.target.value))}
          placeholder="Forint"
        />
        <select name="" id="" onChange={(e) => setmuvelet(e.target.value)}>
          <option value="dollar">dollar</option>
          <option value="euro">euro</option>
        </select>
        <button onClick={() => calculate(forint)}>szamits xddd</button>
        <p>{eredmeny}</p>
      </div>
    </>
  );
};
export default Penzvalto;
