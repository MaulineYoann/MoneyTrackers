import { useState, useId, ChangeEvent, FormEvent, MouseEvent } from "react";

import Button from "../Components/Button";

const Home = () => {
  const [amount, setAmount] = useState<number | null>(null);
  const [totalCash, setTotalCash] = useState<null | number>(null);
  const idAmount = useId();

  const handleSubmit = (
    e: FormEvent<HTMLFormElement> | MouseEvent<HTMLButtonElement>
  ) => {
    e.preventDefault();
    if (amount) {
        setTotalCash(amount)
        setAmount(null)
    } else {
        setTotalCash(null)
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex items-center gap-3">
        <label htmlFor={idAmount}>Montant: </label>
        <input
          className="border rounded-sm p-1"
          type="number"
          id={idAmount}
          value={amount ?? ""}
          onChange={(event: ChangeEvent<HTMLInputElement>) => setAmount(Number(event.target.value))
          }
        />
        <Button type="submit" children={"Add"} className="bg-green-300"/>
        <Button children={"reset"} onClick={() => setTotalCash(null)} className="bg-yellow-300"/>
      </form>
      <p>
        Total cash: <span>{totalCash}</span>
      </p>
    </div>
  );
};

export default Home;
