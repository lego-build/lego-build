import React from "react";
import { Cards, Header, Search } from "../../../../components";
const Main = ({ value, resetValue, workflows, loading }) => {
  return (
    <>
      <Header />
      <Search value={value} resetValue={resetValue} />
      <Cards data={workflows} value={value} loading={loading} />
    </>
  );
};

export default Main;
