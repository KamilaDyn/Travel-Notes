import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "../.././components/Header/Header";
import Sidebar from "../../components/Sidebar/Sidebar";
import AppContext from "../../context";
import Instagram from "../Instagram/Instagram";
import Links from "../Links/Links";
import List from "../List/List";
import Modal from "../../components/Modal/Modal";
import Button from "../../components/Button/Button";
import Backdrop from "../../components/Backdrop/Backdrop";
import instagramState from "../../InitialState/instagramState";
import listState from "../../InitialState/listState";

import styles from "./Root.module.css";

class Root extends Component {
  state = {
    instagram: [...instagramState],
    list: [...listState],
    link: [],
    isModalOpen: false,
    isSidebarOpen: false,
    display: "none",
  };

  menuClicked = () => {
    this.setState((prevState) => {
      return {
        isSidebarOpen: !prevState.isSidebarOpen,
        display: "block ",
      };
    });
    console.log("works");
  };
  closeSidebar = () => {
    this.setState({
      isSidebarOpen: false,
    });
  };

  openModal = () => {
    this.setState({
      isModalOpen: true,
    });
  };
  closeModal = () => {
    this.setState({
      isModalOpen: false,
    });
  };

  addItem = (e, newItem) => {
    e.preventDefault();
    // const newItem = {
    //   name: e.target[0].value,
    //   instagramLink: e.target[1].value,
    //   description: e.target[2].value,
    // };

    this.setState((prevState) => ({
      [newItem.type]: [...prevState[newItem.type], newItem],
    }));
    console.log(newItem);

    e.target.reset();
    this.closeModal();
  };

  render() {
    let backdrop;

    if (this.state.isSidebarOpen || this.state.isModalOpen) {
      backdrop = (
        <Backdrop click={this.closeSidebar} display={this.state.display} />
      );
    }

    const { isModalOpen, isSidebarOpen } = this.state;
    const contextElements = {
      ...this.state,
      addItem: this.addItem,
    };

    return (
      <AppContext.Provider value={contextElements}>
        <BrowserRouter basename="/Travel-Notes/#">
          <div className={styles.wrapper}>
            <Sidebar closeSidebarFn={this.closeSidebar} show={isSidebarOpen} />
            {backdrop}
            <div className={styles.rightWrapper}>
              <Header
                openModalFn={this.openModal}
                showSidebarFn={this.menuClicked}
              />
              <Switch>
                <Route exact path="/" component={Instagram} />
                <Route path="/list" component={List} />
                <Route path="/links" component={Links} />
              </Switch>
              <Button onClick={this.openModal}> + </Button>
              {isModalOpen && <Modal closeModalFn={this.closeModal} />}
            </div>
          </div>
        </BrowserRouter>
      </AppContext.Provider>
    );
  }
}

export default Root;
