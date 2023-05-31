import Button from "./components/Button";

function App() {
  return (
    <div>
      <Button onClick={() => console.log("Button has been clicked")}>
        My Button
      </Button>
    </div>
  );
}

export default App;
