import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { getPopularMovies, searchMovies } from "../api/user-service";
import Movie from "./Movie";

const Search = () => {
  const [search, setSearch] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleOnSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      searchMovies(searchTerm).then((resp) => {
        setSearch(resp.data.results);
        setSearchTerm("");
        console.log(resp.data.results);
      });
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  const handleOnChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const checkDetail = (id) => {
    console.log(id);
    navigate(`/movie/${id}`);
  };

  useEffect(() => {
    getPopularMovies()
      .then((resp) => {
        console.log(resp.data.results);
        setSearch(resp.data.results);
      })
      .catch((err) => {
        console.log("populer film hatasi");
      });
  }, []);

  return (
    <div className="Search">
      <div className="conteiner-search">
        <form className="search-group" onSubmit={handleOnSubmit}>
          <input
            type="text"
            class="form-control"
            placeholder="Search..."
            autoFocus="autofocus"
            value={searchTerm}
            onChange={handleOnChange}
          />
          <Button type="button">Search</Button>
          <Button
            variant="danger"
            className="logoutbutton"
            onClick={handleLogout}
            type="button"
          >
            Logout
          </Button>
        </form>
      </div>
      <Container>
        <Row>
          {search.length > 0 &&
            search.map((item) => (
              <Col className="m-3" onClick={() => checkDetail(item.id)}>
                <Movie key={item.id} {...item} />
              </Col>
            ))}
        </Row>
      </Container>
    </div>
  );
};

export default Search;

/* <Container>
            <Col lg={3}>
              <Movie key={movie.id} {...movie} />
            </Col>
          </Container>; */
