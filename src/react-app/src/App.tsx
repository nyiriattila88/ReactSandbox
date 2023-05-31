import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>
      {alertVisible && <Alert>My Alert</Alert>}
      <Button
        onClick={() => {
          if (alertVisible) {
            setAlertVisibility(false);
          } else {
            setAlertVisibility(true);
          }
        }}
      >
        My Button
      </Button>
    </div>
  );
}

export default App;
