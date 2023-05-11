import React, { useEffect, useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { getAllMovies } from "../../Api/Movies/MovieApi";
import { Button } from "../../Atom";
import { Input } from "../../Molecule";
import { logOut } from "../../Redux/Actions/authActions";
import { setMovies } from "../../Redux/Actions/movieActions";

const NavPage = () => {
  console.log('navBar')
  const dispatch = useDispatch();
  const [form, setForm] = useState({ title: "", sortBy: "" });

  // const getMovies = async () => {
  //   const res = await getAllMovies(form.title, form.sortBy);

  //   if (res.length) {
  //     dispatch(setMovies(res));
  //     if (form.title || form.sortBy) {
  //       setForm({ title: "", sortBy: "" });
  //     }
  //   }
  // };

  const onChange = (value, key) => {
    setForm({ ...form, [key]: value });
  };
  // useEffect(() => {
  //   getMovies()
  // }, [])

  useEffect(() => {
    const getMovies = async () => {
      const res = await getAllMovies(form.title, form.sortBy);
  
      if (res.length) {
        dispatch(setMovies(res));
        if (form.title || form.sortBy) {
          setForm({ title: "", sortBy: "" });
        }
      }
    };
  
    getMovies();
  }, []);
  

  // const handleClick=useCallback(() => {
  //   getMovies();
  // }, []);

  // useEffect(() => {
  //   handleClick()
  // }, [handleClick])

  // const memoizedFunction = useCallback(() => {
  //   getMovies();
  //   console.log('Running effect with memoized function');
  // }, []);

  // useEffect(() => {
  //   memoizedFunction();
  // }, [memoizedFunction]);


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">React Bootstrap</Navbar.Brand>
        </Container>
        <Input
          placeholder={"title"}
          value={form.title}
          onChange={(e) => onChange(e.target.value, "title")}
        />
        {/* <Input
          placeholder={"sortBy"}
          value={form.sortBy}
          onChange={(e) => onChange(e.target.value, "sortBy")}
        /> */}
        <Input
              size="medium"
              as="select"
              options={[
                { value: 'test1', text: 'Texte1' },
                { value: 'test2', text: 'Texte2' },
                { value: 'test3', text: 'Texte3' },
                { value: 'test4', text: 'Texte4' }
              ]}
              onChange={(value) => console.log('value : ', value)}
              multipleSelect={true}
            />
        <Button text={"search"} />
        <Button text={"se deconnecter"} onClick={() => dispatch(logOut())} />
      </Navbar>
    </>
  );
};

export default NavPage;
