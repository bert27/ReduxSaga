import React from "react";
import UserCard from "./UserCard";

interface user {
  avatar: string;
  email: string;
  first_name: string;
  id: number;
  last_name: string;
}

export interface Props {
  item: user;
}

function UsersLoading({ item }: Props) {
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
}

export default UsersLoading;
