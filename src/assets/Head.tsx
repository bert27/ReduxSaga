import React, { useCallback } from "react";
import styled from "styled-components";
import Button from "assets/input/Button";
import { useHistory } from "react-router-dom";

import * as actions from "pages/login/login_store/actions";
import { useDispatch } from "react-redux";
const Headf = styled.div`
  display: flex;
  align-items: center;
  padding: 1% 0 0 0;
  background: #202325;
  font-weight: bold;
  font-size: 1.4vw;
  width: 99%;

  @media (max-width: 480px) {
    font-size: 16px;
    padding: 0;
  }
`;

const Buttonf = styled.div`
  display: flex;
  width: 37%;
  height: 4vw;
  padding: 1%;

  @media (max-width: 480px) {
    font-size: 11px;
    justify-content: center;
    margin-top: 2%;
  }

  @media (max-width: 480px) {
    height: 7vw;
  }
`;

const Head = () => {
  //Redux
  const dispatch = useDispatch();

  const history = useHistory();
  const Onlogout = useCallback(() => {
    //Redux action:
    dispatch(actions.closeSesion());
    localStorage.removeItem("authToken");
    history.push("/login");
  }, [history, dispatch]);
  return (
    <Headf>
      <Buttonf>
        <Button onClick={Onlogout} text={"Cerrar sesión"} />
      </Buttonf>
      Users
    </Headf>
  );
};

export default Head;
