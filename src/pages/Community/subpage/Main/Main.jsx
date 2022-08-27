import React from "react";
import { Cards, Header, Search } from "../../../../components";
const Main = ({ value, resetValue, workflows }) => {
  return (
    <>
      <Header />
      <Search value={value} resetValue={resetValue} />
      <Cards data={workflows} value={value} />
    </>
  );
};

export default Main;
