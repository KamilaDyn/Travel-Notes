import React, { Component } from "react";
import styles from "./Form.module.css";
import Input from "../Input/Input";
import Button from "../Button/Button";
import AppContext from "../../context";
import RadioButton from "./RadioButton";
import ErrorsMessage from "../ErrorMessage/ErrorMessage";

const types = {
  instagram: "instagram",
  link: "link",
  list: "list",
};

const formTitle = {
  instagram: "nowe konto z instagrama",
  link: "nowy link ",
  list: "nowy cel podróży",
};

class Form extends Component {
  state = {
    type: types.instagram,
    title: "",
    link: "",
    image: "",
    description: "",
    formErrors: {
      title: "",
      link: "",
      image: "",
      description: "",
    },
    titleValid: false,
    descriptionValid: false,
    linkValid: false,
    formValid: false,
    imageValid: false,
  };

  handleRadioButtonChange = (type) => {
    this.setState({
      type: type,
    });
  };
  handleInputChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let fieldValidationErrors = this.state.formErrors,
      titleValid = this.state.titleValid,
      descriptionValid = this.state.descriptionValid,
      linkValid = this.state.linkValid,
      imageValid = this.state.imageValid,
      regexLink = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/gi, // with www /https/ http
      // regexLink =
      //   "https?://(www.)?[-a-zA-Z0-9@:%._+~#=]{1,256}.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)", // just https
      regexImageLink = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g;

    switch (fieldName) {
      case "title":
        titleValid = value.length >= 3;
        fieldValidationErrors.title = titleValid ? "" : "za krótki tytuł";
        break;

      case "link":
        linkValid = value.match(regexLink);
        fieldValidationErrors.link = linkValid
          ? ""
          : "wklej / wpisz link z https://";
        break;
      case "image":
        imageValid = value.length === 0 || value.match(regexImageLink);
        fieldValidationErrors.image = imageValid
          ? ""
          : "link do zdjęcia z (jpg/png/gif) lub puste pole";
        break;
      case "description":
        descriptionValid = value.length >= 6;
        fieldValidationErrors.description = descriptionValid
          ? ""
          : " wprowadź dłuższy opis";
        break;
      default:
        break;
    }
    this.setState(
      {
        formErrors: fieldValidationErrors,
        titleValid: titleValid,
        descriptionValid: descriptionValid,
        linkValid: linkValid,
        imageValid: imageValid,
      },
      this.validateForm
    );
  }
  // I will try to change validateForm for sth shorter
  validateForm() {
    const {
      type,
      titleValid,
      descriptionValid,
      linkValid,
      imageValid,
    } = this.state;
    if (type === types.instagram) {
      this.setState({
        formValid: titleValid && descriptionValid && imageValid && imageValid,
      });
    } else if (type === types.link) {
      this.setState({
        formValid: titleValid && descriptionValid && linkValid,
      });
    } else {
      this.setState({
        formValid: titleValid && descriptionValid,
      });
    }
    return true;
  }
  errorClass(error) {
    return error.length === 0 ? "" : "has-error";
  }

  render() {
    const { type, formErrors, image, link, title, description } = this.state;

    return (
      <AppContext.Consumer>
        {(context) => (
          <div className={styles.formWrapper}>
            <p className={styles.formTitle}> Dodaj {formTitle[type]} </p>
            <div className={styles.line} />
            <form
              id="form"
              className={styles.formContainer}
              onSubmit={(e) => context.addItem(e, this.state)}
              autoComplete="off"
            >
              <div className={styles.formOptions}>
                <RadioButton
                  id={type.instagram}
                  checked={type === types.instagram}
                  changeFn={() => this.handleRadioButtonChange(types.instagram)}
                >
                  instagram
                </RadioButton>
                <RadioButton
                  id={type.link}
                  checked={type === types.link}
                  changeFn={() => this.handleRadioButtonChange(types.link)}
                >
                  link
                </RadioButton>
                <RadioButton
                  id={type.list}
                  checked={type === types.list}
                  changeFn={() => this.handleRadioButtonChange(types.list)}
                >
                  podróże
                </RadioButton>
              </div>
              <div className="panel panel-default"> </div>
              <div className={styles.formInputs}>
                <div className={styles.inputs}>
                  <ErrorsMessage formErrors={formErrors.title} />
                  <Input
                    required
                    value={title}
                    onChange={this.handleInputChange}
                    name="title"
                    label={type === types.instagram ? "Nazwa " : "Tytył"}
                  />
                  <ErrorsMessage formErrors={formErrors.link} />
                  {type === types.list ? null : (
                    <Input
                      required
                      value={link}
                      onChange={this.handleInputChange}
                      name="link"
                      label={type === types.instagram ? "Link" : "Link"}
                    />
                  )}
                  <ErrorsMessage formErrors={formErrors.image} />
                  {type === types.instagram ? (
                    <Input
                      value={image}
                      onChange={this.handleInputChange}
                      name="image"
                      label="Zdjęcie"
                    />
                  ) : null}
                </div>
                <div className={styles.textcontainer}>
                  <ErrorsMessage formErrors={formErrors.description} />
                  <Input
                    required
                    tag="textarea"
                    value={description}
                    onChange={this.handleInputChange}
                    name="description"
                    label="Krótki opis"
                    placeholder={
                      type === types.list
                        ? "Jaki jest Twój nowy plan podróży?"
                        : "Wprowadź krótki opis"
                    }
                    maxLength="1000"
                  />
                </div>
              </div>
              <Button type="submit" secondary>
                Dodaj
              </Button>
            </form>
          </div>
        )}
      </AppContext.Consumer>
    );
  }
}

export default Form;
