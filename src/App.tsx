
import Card from "./Components/Card";
import SectionComponent from "./Containers/SctionComponent";

import { useId } from "react";

interface CardObjet {
  id: number;
  title: "Free" | "Premium";
  price: number;
}

function App() {

  const password = useId()
  const optionCard: CardObjet[] = [
    {
      id: 0,
      title: "Free",
      price: 0,
    },
    {
      id: 1,
      title: "Premium",
      price: 20,
    },
  ];


  return (
    <>
      <div className="h-screen bg-sky-950 text-white">
        <SectionComponent>
          <h1 className="text-center text-3xl">Nexa Finance</h1>
          <div className="flex gap-10">
            {optionCard.map((item) => (
              <Card key={item.id} title={item.title} price={item.price} />
            ))}
          </div>
            <label htmlFor={password}>Password
            <input type="text" aria-describedby={password} />
            </label>

            <p id={password}>the password should contain at least 18 characters</p>
        </SectionComponent>
      </div>
    </>
  );
}

export default App;
