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
  const [error, setError] = useState({
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
    }else{
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
      
    }
    setError(aux);
    
  };
  if(accessToken){
    return <Navigate to='/movies' />
  }
  return (
    <div>
      <Input
        inputLabel={"username"}
        onChange={(e) => onChange(e.target.value, "username")}
        value={form.username}
        errorMsg={error.errorMsg}
        isInvalid={error.isInvalid}
      />
      <Input
        inputLabel={"password"}
        onChange={(e) => onChange(e.target.value, "password")}
        password={true}
        value={form.password}
        errorMsg={error.errorMsg}
        isInvalid={error.isInvalid}
      />
      <Button text={"se connecter"} onClick={validate} />
    </div>
  );
};

export default LoginPage;
