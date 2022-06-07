// import logo from './logo.svg';
import "./App.css";
import Counter from "./Components/Counter";

function App() {
  return (
    <div
      style={{
        border: "1px solid red",
        width: "30%",
        margin: "auto",
        height: "300px",
        marginTop: "50px",
        boxShadow:
          "rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px, rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px, rgb(255, 85, 85) 0px 0px 0px 15px",
      backgroundColor:"yellowgreen"
        }}
      className="App"
    >
      <Counter></Counter>
    </div>
  );
}

export default App;
