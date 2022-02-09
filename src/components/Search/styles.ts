import styled from "styled-components";

export const ContainerSearch = styled.div`
  display: flex;
  width: 100%;
  min-height: 70px;
`;

export const Input = styled.input`
  width: 100%;
  margin-top: 1rem;

  &::placeholder {
    font-size: 20px;
    padding-left: 1rem;
  }
`;
