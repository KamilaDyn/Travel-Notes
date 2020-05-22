import React from "react";

import AppContext from "../../context";

import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import Title from "../../components/Title/Title";

const Links = () => (
  <>
    <Title subtitle>Lista Twoich ulubionych stron</Title>
    <AppContext.Consumer>
      {(context) => <CardsWrapper items={context.link} />}
    </AppContext.Consumer>
  </>
);
export default Links;
