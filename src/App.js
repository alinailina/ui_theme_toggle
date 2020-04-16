import React from "react";
import Nav from "./components/Nav";
import Body from "./components/Body";
import ThemeContextProvider from "./contexts/ThemeContext";
import AuthContextProvider from "./contexts/AuthContext";

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
          <Nav />
          <Body />
        </AuthContextProvider>
      </ThemeContextProvider>
    </div>
  );
}

export default App;
