import React from "react";

import AppContext from "../../context";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import Title from "../../components/Title/Title";

const List = () => (
  <>
    <Title subtitle>Lista podróży</Title>
    <AppContext.Consumer>
      {(context) => <CardsWrapper items={context.list} />}
    </AppContext.Consumer>
  </>
);
export default List;
