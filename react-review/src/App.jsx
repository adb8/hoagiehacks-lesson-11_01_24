import logo from "./logo.svg";
import "./App.css";
import ImageCard from "./components/card/Card.jsx";
import { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";

function App() {
  const [text, setText] = useState("Hello world!");
  const [show, setShow] = useState(true);
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    const fetchQuotes = async () => {
      const response = await fetch("https://dummyjson.com/quotes");
      const data = await response.json();
      const quotes = data.quotes.slice(0, 3);
      console.log(quotes);
      setQuotes(quotes);
    };
    fetchQuotes();
  }, []);

  function changeText() {
    if (text === "Hello World!") {
      setText("The text has been changed!");
    } else if (text === "The text has been changed!") {
      setText("The text has been changed again!");
    } else {
      setText("Hello World!");
    }
  }

  return (
    <div className="App">
      <header className="flex flex-col items-center text-center">
        <div className="flex gap-4 mt-12">
          <ImageCard image="https://picsum.photos/id/237/200/250" text="This is a dog" />
          <ImageCard image="https://picsum.photos/id/239/200/250" text="This is a flower" />
          <ImageCard image="https://picsum.photos/id/240/200/250" text="This is a wall" />
          <ImageCard image="https://picsum.photos/id/242/200/250" text="This is a road" />
        </div>

        <div className="flex items-center justify-center mt-12 gap-5">
          <Typography variant="h6">{text}</Typography>
          <Button variant="contained" color="primary" onClick={changeText}>
            Update state variable
          </Button>
        </div>

        <div className="flex items-center justify-center mt-5 gap-5">
          {show && <Typography variant="h6">This element can be toggled</Typography>}
          <Button
            variant="contained"
            color="secondary"
            onClick={() => {
              setShow(!show);
            }}>
            Toggle element
          </Button>
        </div>

        {quotes && quotes.length > 0 && (
          <div className="flex flex-col items-center justify-center mt-12 gap-5">
            <ul>
              {quotes.map((quote, index) => (
                <Typography key={index} variant="body1" component="li">
                  {quote.quote}
                </Typography>
              ))}
            </ul>
          </div>
        )}
      </header>
    </div>
  );
}

export default App;
