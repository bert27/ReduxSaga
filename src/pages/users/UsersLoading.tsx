import React from "react";
import UserCard from "./UserCard";
const UsersLoading = (props) => {
  const item = {
    id: "loading",
  };

  return (
    <>
      <UserCard key={1} item={item} />
      <UserCard key={2} item={item} />
      <UserCard key={3} item={item} />
      <UserCard key={4} item={item} />
      <UserCard key={5} item={item} />
      <UserCard key={6} item={item} />
    </>
  );
};

export default UsersLoading;
