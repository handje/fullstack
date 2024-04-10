import React, { useEffect } from "react";
import axios from "axios";
function App() {
  //fetch-get
  const callApi = async () => {
    try {
      const response = await fetch("/users");
      const body = await response.json();
      alert(body.message);
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    callApi();
  }, []);

  //axios-post
  const submitClick = async (e) => {
    axios.post("/users", {}).then((response) => {
      alert(response.data.message);
    });
  };

  return (
    <div className="App">
      <button className="s_bt" type="submit" onClick={submitClick}>
        post 호출
      </button>
    </div>
  );
}

export default App;
