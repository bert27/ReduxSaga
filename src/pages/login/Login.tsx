import React, { useEffect, useCallback, useState } from "react";
import Input from "assets/input/Input";
import Button from "assets/input/Button";
import { useHistory } from "react-router-dom";
import * as actions from "./login_store/actions";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  width: 100%;
  padding: 8% 0% 0%;
  align-items: center;
  flex-direction: column;
`;
const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgb(32, 35, 37);
  padding: 1% 5% 4%;
`;
const Title = styled.p`
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  font-weight: 700;
`;

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
  const [error, seterror] = useState({
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

    let errortmp = error;
    if (passwordok !== password) {
      errortmp = { ...errortmp, password: "contraseña incorrecta" };
    } else {
      errortmp = { ...errortmp, password: "" };
    }
    if (!re.test(email) && emailok !== email) {
      errortmp = { ...errortmp, email: "correo incorrecto" };
    } else {
      errortmp = { ...errortmp, email: "" };
    }

    seterror(errortmp);
  }, [email, password, error, dispatch]);

  const onChangeEmail = useCallback((newemail) => {
    setemail(newemail);
  }, []);
  const onChangePassword = useCallback((newpassword) => {
    setpassword(newpassword);
  }, []);
  return (
    <Container>
      <Card>
        <Title>Inicia Sesión con tu email</Title>
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
      </Card>
    </Container>
  );
};

export default Login;
