import { createRoot } from "react-dom/client"; // Import only parts that we use. Tree shaking use only what you need.
import SearchParams from "./SearchParams";
import Pet from "./Pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me!</h1>
      {/* <Pet name="Charlie" animal="Dog" breed="Cocker Spaniel Indie" />
      <Pet name="Kitkat" animal="Fish" breed="Gold Fish" />
      <Pet name="Shifu" animal="Dog" breed="Shihtzu" /> */}
      <SearchParams />
    </div>
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />); // We give a component here, if we put text it renders the tag.
