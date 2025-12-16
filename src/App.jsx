import { Card } from "./components/card/card.jsx";
import { cardsMockData } from "./mock/card-items.js";
import "./styles.css";

function App() {
  return <main>
    <div className="items-container">
      {
      cardsMockData.map((card) => (<Card {...card} />))
    }
    </div>
</main>;
}

export default App;
