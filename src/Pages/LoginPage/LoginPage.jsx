import React, { useState } from "react";
import { Input } from "../../Molecule";
import { Navigate, useNavigate } from "react-router";
import { Button } from "../../Atom";
import { apiLogin } from "../../Api/Login/Login";
import { useDispatch, useSelector } from "react-redux";
import { setToken } from "../../Redux/Actions/authActions";

const LoginPage = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector(state => state.auth.accessToken);
  const [form, setForm] = useState({ username: "", password: "" });
  const [valid, setValid] = useState({
    isInvalid: false,
    errorMsg: "",
  });
  const onChange = (value, key) => {
    setForm({ ...form, [key]: value });
  };
  const navigate = useNavigate();
  const validate = async () => {
    let aux = {
      isInvalid: false,
      errorMsg: "",
    };
    if (!form.username.trim() || !form.password.trim()) {
      aux = {
        isInvalid: true,
        errorMsg: "Ce champ est obligatoire. ",
      };
    }

    const response = await apiLogin(form.username, form.password);
    if (response.token) {
      dispatch(setToken(response.token));
      navigate("/movies");
    } else {
      aux = {
        isInvalid: true,
        errorMsg: "Bad Credentials. ",
      };
    }
    setValid(aux);
  };
  if(accessToken){
    return <Navigate to='/movies' />
  }
  return (
    <div>
      <Input
        inputLabel={"username"}
        onChange={(e) => onChange(e.target.value, "username")}
      />
      <Input
        inputLabel={"password"}
        onChange={(e) => onChange(e.target.value, "password")}
      />
      <Button text={"se connecter"} onClick={validate} />
    </div>
  );
};

export default LoginPage;
