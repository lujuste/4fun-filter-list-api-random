import styled from "styled-components";
import * as AvatarPrimitive from "@radix-ui/react-avatar";

export const Flex = styled.div`
  width: 100%;
  display: flex;
  min-height: 100px;
  background: rgba(255, 255, 255, 0.8);
  border-radius: 15px;
  margin-top: 1rem;
  height: 100%;
  align-items: center;
  padding: 0 2rem;
  justify-content: center;
`;

export const Heading = styled.h1`
  font-size: 1.25rem;
  font-weight: bold;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Text = styled.p`
  font-size: 1rem;
  font-weight: normal;
  margin-top: 0.5rem;
  color: black;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  flex-direction: column;
  margin-left: 1rem;
`;
