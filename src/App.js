import "./App.css";
import React from "react";

const App = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch(
      "https://api.nasa.gov/planetary/apod?api_key=TkuLoCKaR3FWIeqjZP9i5yyiLpPFPKyvjApcPm75"
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then((response) => {
        setData(response);
      });
  }, []);

  console.log(data);

  return (
    <div className="App">
      <header className="App-header">
        {data ? (
          <>
            <img src={data.hdurl} className="apod-img" alt="Apod" />
            <h3>{data.title}</h3>
            <p>{data.explanation}</p>
          </>
        ) : (
          <p>Loading</p>
        )}
      </header>
    </div>
  );
};

export default App;
