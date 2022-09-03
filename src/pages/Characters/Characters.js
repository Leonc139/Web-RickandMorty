import React, { useState, useEffect } from "react";
import axios from "axios";
import { CHARACTERS_API } from "../../utils/constants";
import Character from "../../components/Character/Character";
import Page from "../../components/Page/Page";

const Characters = () => {
  const [characters, setCharacters] = useState([]);
  const [page, setPage] = useState({});

  useEffect(() => {
    fetchData(CHARACTERS_API);
  }, []);

  const fetchData = (url) => {
    try {
      axios
        .get(url)
        .then((data) => {
          // console.log("res: ", data);
          setCharacters(data.data.results);
          setPage(data.data.info);
        })
        .catch((error) => {
          console.log(error);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const handleNextPage = () => {
    fetchData(page.next);
    console.log(page);
  };

  const handlePreviousPage = () => {
    fetchData(page.prev);
  };

  return (
    <div className="container">
      <h2 className="mt-2">Characters</h2>
      <hr />
      <div className="row">
        {characters.map((character) => {
          return (
            <div
              className="col-6 col-sm-4"
              style={{ display: "flex" }}
              key={character.id}
            >
              <Character character={character} />
            </div>
          );
        })}
      </div>
      <div className="pagination mt-1">
        {page.prev ? (
          <Page title="Previous" onClick={handlePreviousPage} />
        ) : null}
        {page.next ? <Page title="Next" onClick={handleNextPage} /> : null}
      </div>
    </div>
  );
};

export default Characters;
