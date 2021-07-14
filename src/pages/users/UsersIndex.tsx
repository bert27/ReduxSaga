import React, { useEffect, useCallback, useState } from "react";
import styled from "styled-components";
import Button from "assets/input/Button";
import { useHistory } from "react-router-dom";
import UsersLoading from "./UsersLoading";
import UserCard from "./UserCard";
import Head from "assets/Head";
import * as actions from "./users_store/actions";
import { useDispatch, useSelector } from "react-redux";
const ListUsersFather = styled.div`
  display: flex;
  width: 80%;
  height: auto;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const PageUsers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: auto;

  @media (max-width: 480px) {
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
  }
`;
const UsersIndex = (props) => {
  //Redux
  const dispatch = useDispatch();
  let users = useSelector((state: any) => {
    return state.users;
  }); //
  const history = useHistory();
  const npage = props.match.params.page;
  const [usersdata, setusersdata] = useState([]);
  const [disablebuttonBack, setdisablebuttonBack] = useState(false);
  const [disablebuttonNext, setdisablebuttonNext] = useState(false);

  //check token in localstorage and redirect to login if not exits:
  const checkLogin = useCallback(() => {
    //if token in localstorage, load users page to redux saga:
    if (localStorage.getItem("authToken") !== null) {
      dispatch(actions.getUsers(npage));
    } else {
      history.push("/login");
    }
  }, [npage, dispatch, history]);

  //Receives the number of pages and current page from the endpoint
  //Enable/disable buttons to nav:
  const controllerPage = useCallback(() => {
    const page = users.users.page;
    const total_pages = users.users.total_pages;

    if (page === total_pages) {
      setdisablebuttonNext(true);
    } else {
      setdisablebuttonNext(false);
    }

    if (page === 1) {
      setdisablebuttonBack(true);
    } else {
      setdisablebuttonBack(false);
    }
  }, [users]);

  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  useEffect(() => {
    const userstoview = users.users.data;
    if (userstoview.length > 0) {
      controllerPage();
      setusersdata(userstoview);
    }
  }, [users, controllerPage]);

  //Butons next and back:
  const nextPage = useCallback(() => {
    dispatch(actions.getUsers(2));

    history.push({
      pathname: `/users/${2}`,
    });
  }, [dispatch, history]);

  const backPage = useCallback(() => {
    dispatch(actions.getUsers(1));

    history.push({
      pathname: `/users/${1}`,
    });
  }, [dispatch, history]);
  //map to view to state, get of redux
  const listUsers = useCallback(() => {
    if (usersdata.length > 0) {
      return usersdata.map((item, index) => {
        return <UserCard item={item} key={index} />;
      });
    } else {
      return <UsersLoading />;
    }
  }, [usersdata]);

  return (
    <PageUsers>
      <Head />
      <ListUsersFather>{listUsers()}</ListUsersFather>

      <div
        style={{
          display: "flex",
          width: "100%",
          height: "auto",
          justifyContent: "space-around",
          alignItems: "baseline",
          marginTop: "14px",
        }}
      >
        {usersdata.length > 0 && (
          <>
            <Button
              onClick={backPage}
              text={"Atras"}
              disable={disablebuttonBack}
            />
            <Button
              onClick={nextPage}
              text={"Siguiente"}
              disable={disablebuttonNext}
            />
          </>
        )}
      </div>
    </PageUsers>
  );
};

export default UsersIndex;
