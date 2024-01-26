import React, { useEffect } from "react";
import { customRender } from "./CustomRender";

function Assignment3() {
  const reactElement = {
    type: "a",
    href: "https://www.youtube.com/",
    text: "Click here to visit YouTube",
  };

  useEffect(() => {
    renderContent();
  }, []);

  function renderContent() {
    customRender(reactElement, "#custom");
  }

  return <div id="custom"></div>;
}

export default Assignment3;
