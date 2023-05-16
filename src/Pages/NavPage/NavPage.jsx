import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../../Api/Movies/MovieApi";
import { Button, Img, Text } from "../../Atom";
import { Input } from "../../Molecule";
import { logOut } from "../../Redux/Actions/authActions";
import { setMovies } from "../../Redux/Actions/movieActions";
import mediahub from "../../assets/image/mediahub.jpg";
var lastSearchTime = 0;

const NavPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [form, setForm] = useState({ title: "", sortBy: "" });
  const getMovies = async () => {
    const currentTime = new Date().getTime();
    let timeSinceLastSearch = currentTime - lastSearchTime;
    let res = [];
    if (timeSinceLastSearch >= 1000) {
      await setTimeout(2000);
      res = await getAllMovies(form.title, form.sortBy);
      lastSearchTime = currentTime;
    } else {
      return alert("Too Many Requests");
    }

    if (res.length) {
      dispatch(setMovies(res));
      if (form.title || form.sortBy) {
        setForm({ ...form, title: "", sortBy: "" });
      }
      navigate("/movies");
    }
  };

  const onChange = (value, key) => {
    setForm({ ...form, [key]: value });
  };
  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className="NavPage-container" >
    <div className="NavPage-container-img-historique">
      <Img
        src={mediahub}
        width="321px"
        height="150px"
        className="logo-media"
        onClick={getMovies}
      />
        <Text
          text={"Historique"}
          onClick={() => navigate("/movies/historique")}
          className={'NavPage-historique-text'}
        />
        </div>
        <div className="NavPage-container-search">
        <Input
          placeholder={"title"}
          value={form.title}
          onChange={(e) => onChange(e.target.value, "title")}
        />
        <Input
          size="medium"
          as="select"
          value={form.sortBy}
          options={[
            { value: "Rotten Tomatoes Rating", text: "Rotten Tomatoes Rating" },
            { value: "IMDB Rating", text: "IMDB Rating" },
            { value: "IMDB Votes", text: "IMDB Votes" },
          ]}
          onChange={(value) => setForm({ ...form, sortBy: value })}
          multipleSelect={false}
        />
        <Button text={"search"} onClick={getMovies} className={'btn-NavePage'} />
        </div>
        <Button text={"se deconnecter"} className={'btn-NavePage'} onClick={() => dispatch(logOut())} />
    </div>
  );
};

export default NavPage;
