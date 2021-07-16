import React, { useEffect, useCallback, useState } from "react";
import Input from "assets/input/Input";
import Button from "assets/input/Button";
import { useHistory } from "react-router-dom";
import * as actions from "./login_store/actions";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  //Redux
  const dispatch = useDispatch();
  let login = useSelector((state: any) => {
    return state.login;
  }); //
  const passwordok = "cityslicka";
  const emailok = "eve.holt@reqres.in";
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const history = useHistory();
  let [error, seterror] = useState({
    password: "",
    email: "",
  });
  //When loading the web, check if there is a token stored localStorage
  useEffect(() => {
    if (localStorage.getItem("authToken")) {
      history.push({
        pathname: `/users/${1}`,
      });
    }
  }, [login, history]);

  const onLogin = useCallback(() => {
    let re =
      /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    //Check if login ok
    if (passwordok === password && emailok === email && re.test(email)) {
      const data = {
        email: email,
        password: password,
      };

      //Redux action:
      dispatch(actions.getToken(data));
    }
    //Check errors:
    if (passwordok !== password) {
      error = { ...error, password: "contraseña incorrecta" };
    } else {
      error = { ...error, password: "" };
    }
    if (!re.test(email) && emailok !== email) {
      error = { ...error, email: "correo incorrecto" };
    } else {
      error = { ...error, email: "" };
    }

    seterror(error);
  }, [email, password, error, dispatch]);

  const onChangeEmail = useCallback((newemail) => {
    setemail(newemail);
  }, []);
  const onChangePassword = useCallback((newpassword) => {
    setpassword(newpassword);
  }, []);
  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        padding: "8% 0% 0% 0%",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          background: "#202325",
          padding: "1% 5% 4% 5%",
        }}
      >
        <p
          style={{
            fontWeight: "bold",
            fontSize: "1.4em",
          }}
        >
          Inicia Sesión con tu email
        </p>
        <div>
          <Input
            name="Correo electrónico"
            type={"email"}
            onChange={onChangeEmail}
            error={error.email}
          />
          <Input
            name="Contraseña"
            type={"password"}
            onChange={onChangePassword}
            error={error.password}
          />
        </div>

        <Button onClick={onLogin} text={"Iniciar Sesión"} big={true} />
      </div>
    </div>
  );
};

export default Login;
