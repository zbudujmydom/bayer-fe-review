import { useContext, useState } from "react";
import { ConfigContext } from "../../contexts/ConfigContext";

const defaultCounterValue = 0;

export const Counter = () => {
  const [counter, setCounter] = useState(defaultCounterValue);
  const { env } = useContext(ConfigContext);

  const handlePlusOne = (): void => {
    setCounter((prevState) => prevState + 1);
  };

  const handleMinusOne = (): void => {
    setCounter((prevState) => prevState - 1);
  };

  return (
    <section>
      <h3>{counter}</h3>
      <p>Env: {env === "prod" ? "Produkcja" : "staging"}</p>
      <button onClick={handlePlusOne}>+1</button>
      <button disabled={counter === 0} onClick={() => handleMinusOne()}>
        -1
      </button>
      <button
        onClick={() => {
          setCounter(defaultCounterValue);
        }}
      >
        Reset
      </button>
    </section>
  );
};
