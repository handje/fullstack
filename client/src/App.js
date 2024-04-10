import React, { useEffect } from "react";

function App() {
  const callApi = async () => {
    try {
      const response = await fetch("/users");
      const body = await response.text();
      alert(body);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  return (
    <div className="App">
      <p>
        Edit <code>src/App.js</code> AND save to reload.
      </p>
    </div>
  );
}

export default App;
