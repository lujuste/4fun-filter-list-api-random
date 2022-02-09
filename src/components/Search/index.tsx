import React from "react";
import { ContainerSearch, Input } from "./styles";

export default function Search({ search, setSearch }: any) {
  const handleSearch = (e: any) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };

  return (
    <ContainerSearch>
      <Input
        type="search"
        name="search"
        id="search"
        value={search}
        onChange={handleSearch}
        placeholder="Search"
      />
    </ContainerSearch>
  );
}
