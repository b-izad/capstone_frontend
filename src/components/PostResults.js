import React, { useState, useEffect } from "react";
import axios from "axios";
import { Card, Input } from "semantic-ui-react";
import "./PostResults.css";

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
      <section className="searchbox">
        <h4>search for a pet sitter </h4>
        <input
          className="searchbar"
          type="text"
          icon="search"
          placeholder="Search..."
          onChange={(e) => searchItems(e.target.value)}
        />
      </section>
      <div className="mx-auto p-5">
        <Card.Group itemsPerRow={5} style={{ marginTop: 20 }}>
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
