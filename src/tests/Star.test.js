import React from "react"
import ReactDOM from "react-dom/client"
import Star from "../components/Star";

test('render a star', () => {
  const div = document.createElement('div');
  const root = ReactDOM.createRoot(div);
  root.render(
    <React.StrictMode>
      <Star />
    </React.StrictMode>
  );

  // expect(div.querySelector("svg")).toBeTruthy();
})