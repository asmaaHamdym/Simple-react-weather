import "./styles.css";
import Search from "./Search";

export default function App() {
  return (
    <>
      <div className="App">
        <h1>Weather Search Engine</h1>
        <h2>Type the city you want to search for!</h2>
        <Search />
      </div>
    </>
  );
}
