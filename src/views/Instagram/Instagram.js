import React from "react";
import CardsWrapper from "../../components/CardsWrapper/CardsWrapper";
import AppContext from "../../context";
import Title from "../../components/Title/Title";

const Instagram = () => (
  <>
    <Title subtitle>Lista kont podróżników na instagramie</Title>
    <AppContext.Consumer>
      {(context) => <CardsWrapper items={context.instagram} />}
    </AppContext.Consumer>
  </>
);
export default Instagram;
