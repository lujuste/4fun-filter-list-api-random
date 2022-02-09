import React from "react";
import { Flex, Heading, Text, Wrapper } from "./styles";
import Avatar from "@mui/material/Avatar";

export default function UserItem({ user }: any) {
  return (
    <Flex>
      <Avatar sx={{ width: 86, height: 86 }} src={user.avatar} />

      <Wrapper>
        <Heading> {user.first_name} </Heading>
        <Text> {user.employment.title}</Text>
      </Wrapper>
    </Flex>
  );
}
