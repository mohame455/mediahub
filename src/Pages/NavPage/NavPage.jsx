import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getAllMovies } from "../../Api/Movies/MovieApi";
import { Button, Img } from "../../Atom";
import { Input } from "../../Molecule";
import { logOut } from "../../Redux/Actions/authActions";
import { setMovies } from "../../Redux/Actions/movieActions";
import mediahub from '../../assets/image/mediahub.jpg';

const NavPage = () => {
  const dispatch = useDispatch();
  const navigate=useNavigate()
  const [form, setForm] = useState({ title: "", sortBy: "" });

  const getMovies = async () => {
    const res = await getAllMovies(form.title, form.sortBy);
    
    if (res.length) {
      dispatch(setMovies(res));
      if (form.title || form.sortBy) {
        setForm({ ...form, title: "", sortBy: "" });
      }
      navigate('/movies')
    }
  };

  const onChange = (value, key) => {
    setForm({ ...form, [key]: value });
  };
  useEffect(() => {
    getMovies();
  }, []);


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
        <Img
        src={mediahub}
        width='321px'
        height='150px'
        className='logo-media'
        onClick={getMovies}
      />
          <Navbar.Brand href="#home" onClick={()=>navigate('/movies/historique')} >Historique</Navbar.Brand>
        </Container>
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
        <Button text={"search"} onClick={getMovies} />
        <Button text={"se deconnecter"} onClick={() => dispatch(logOut())} />
      </Navbar>
    </>
  );
};

export default NavPage;
