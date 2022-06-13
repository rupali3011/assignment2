import React from "react";
import "./styles.css";
const App = () => {
  return (
    <p>
      Now I can render any React component on any DOM node I want using
      ReactDOM.render
    </p>
  );
};

//! Needed so that `index.js` can do `import App from './App.js'`
export default App;
