import React, { Component } from "react";
import PropTypes from "prop-types";
import styles from "./Card.module.css";
import Button from "../../Button/Button";

class Card extends Component {
  state = {
    isActive: false,
  };
  activeItem = () => {
    console.log(this.state.isActive);
    this.setState((prevState) => {
      return { isActive: !prevState.isActive };
    });
  };
  deleteItem = () => {
    let element = document.getElementById(this.props.title);
    console.log(element);
    element.remove();
  };
  render() {
    const { image, title, description, link } = this.props;
    const ImageTag = image ? "img" : "div";

    return (
      <div className={styles.card} id={title}>
        <div className={image ? styles.header : styles.header_s}>
          <p className={image ? styles.title : styles.title100}>{title}</p>
          <div className={image ? styles.photoBox : styles.noItem}>
            {image && (
              <ImageTag
                src={image}
                alt={title}
                className={image ? styles.image : styles.imageNone}
              />
            )}
          </div>
        </div>
        <div className={styles.description}>
          <p className={link ? styles.content : styles.content_noLink}>
            {description}
          </p>
          <p className={link ? styles.link : styles.noItem}>
            Przejdź pod link:
            <a href={link}>{title}</a>
          </p>
          <Button
            secondary
            onClick={(e) => {
              if (window.confirm("Czy na pewno chcesz usunąć element?")) {
                this.deleteItem(e);
              }
            }}
          >
            Usuń
          </Button>
        </div>
      </div>
    );
  }
}

Card.propTypes = {
  // image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  link: PropTypes.string,
};

Card.defaultProps = {
  description: "One of the React creators",
};

export default Card;
