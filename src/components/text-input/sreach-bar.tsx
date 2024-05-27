import React from "react";
import { Searchbar } from "react-native-paper";

export default function SearchInput() {
  const [searchQuery, setSearchQuery] = React.useState("");

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={setSearchQuery}
      value={searchQuery}
    />
  );
}