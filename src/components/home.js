import React from "react";
// import NewPostForm from "./NewPostForm";
// import TextField from "@mui/material/TextField";
// import List from "./List";
import Posts from "./PostResults.js";

function Home() {
  // const [inputText, setInputText] = useState("");

  // const inputHandler = (e) => {
  //   //convert input text to lower case
  //   let lowerCase = e.target.value.toLowerCase();
  //   setInputText(lowerCase);
  // };

  return (
    <>
      <div>
        <Posts />
      </div>
      {/* <div className=""></div> */}
      {/* <div className="main">
        <h4>Find the perfect caretaker for your fluffy friend here!</h4>
        <div className="search">
          <TextField
            className="text-dark"
            id="outlined-basic"
            onChange={inputHandler}
            variant="outlined"
            fullWidth
            label="Search"
          />
        </div>
      </div>
      <List input={inputText} /> */}
    </>
  );
}

export default Home;
