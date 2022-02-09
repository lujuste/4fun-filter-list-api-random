//@ts-nocheck

import { useEffect, useState } from "react";

import Search from "../Search";
import UserItem from "../UserItem";
import { Container } from "./styles";

export default function HomeScreen() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://random-data-api.com/api/users/random_user?size=30")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  return (
    <Container>
      <Search search={search} setSearch={setSearch} />
      <ul>
        {users
          .filter((user) =>
            user.first_name.toLowerCase().includes(search.toLowerCase())
          )
          .map((user) => (
            <li>
              <UserItem key={user.first_name} user={user} />
            </li>
          ))}
      </ul>
    </Container>
  );
}
