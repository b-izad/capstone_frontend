import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "semantic-ui-react";
import "./PostResults.css";
import dog from "../images/dog.png";

export default function Posts() {
  const [APIData, setAPIData] = useState([]);
  const [filteredResults, setFilteredResults] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/posts`).then((response) => {
      setAPIData(response.data);
    });
  }, []);

  const searchItems = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = APIData.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(APIData);
    }
  };

  return (
    <>
      <div className="searchbox d-flex flex-column align-items-center justify-content-center border border-dark ">
        <h3 className="title mt-5">search for a pet sitter </h3>
        <input
          className="searchbar"
          type="text"
          icon="search"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
        <div className="">
          <img className="img-fluid center-block w-25" src={dog} alt="dog" />
        </div>
      </div>
      <div className="mx-auto p-5">
        <h1 className="d-flex justify-content-center mb-5">
          Pet Services Near You
        </h1>
        <Card.Group itemsPerRow={2}>
          {searchInput.length > 1
            ? filteredResults.map((item) => {
                return (
                  <Card key={item.id}>
                    <Card.Content>
                      <Card.Header>{item.title}</Card.Header>
                      <Card.Description>{item.body}</Card.Description>
                    </Card.Content>
                  </Card>
                );
              })
            : APIData.map((item) => {
                return (
                  <Card key={item.id}>
                    <Card.Content>
                      <Card.Header>{item.title}</Card.Header>
                      <Card.Description>{item.body}</Card.Description>
                    </Card.Content>
                  </Card>
                );
              })}
        </Card.Group>
      </div>
    </>
  );
}
