import React from "react";
import "./HomePage.scss";
import Directory from "../../components/directory/Directory";
import { HomePageContainer } from "./HomePageContainer";

const HomePage = () => {
  return (
    <HomePageContainer>
      <Directory />
    </HomePageContainer>
  );
};

export default HomePage;
