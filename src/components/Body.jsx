import React, { Component } from "react";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends Component {
  static contextType = ThemeContext;

  render() {
    const { toggleTheme, isLightTheme, light, dark } = this.context;
    const theme = isLightTheme ? light : dark;
    return (
      <div
        className="container"
        style={{ background: theme.bg, color: theme.txt }}
      >
        <p style={{ textTransform: "capitalize" }}>{theme.name} theme</p>

        <div className="icon">
          <img src={require(`../assets/${theme.name}.png`)} alt="icon" />
        </div>

        <button
          onClick={toggleTheme}
          style={{ background: theme.ui, color: theme.txt }}
        >
          Toggle theme
        </button>
      </div>
    );
  }
}

export default BookList;
