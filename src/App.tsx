import "./styles.css";
import Card from "./Card";
import PriceOption from "./models/PriceOption";

const Items = [
  new PriceOption(1, 500, 550, "грн"),
  new PriceOption(2, 100, 150, "грн"),
  new PriceOption(3, 50, 90, "грн")
];

export default function App() {
  const callbackHandler = (selectedOption) => {
    console.log(selectedOption);
    alert(
      "Товар додано до кошика!" +
        " " +
        selectedOption.price +
        " " +
        selectedOption.currency
    );
  };

  return (
    <div className="App">
      <Card items={Items} callback={callbackHandler} />
    </div>
  );
}
