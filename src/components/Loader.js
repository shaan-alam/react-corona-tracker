import React from "react";
import ReactDOM from "react-dom";

const LoaderBody = () => {
  return (
    <div className="loader_bg">
      <div className="group">
        <div className="big_sqr">
          <div className="square first"></div>
          <div className="square second"></div>
          <div className="square third"></div>
          <div className="square fourth"></div>
        </div>
        <div className="text">Fetching Data</div>
      </div>
    </div>
  );
};

function Loader() {
  return ReactDOM.createPortal(
    <LoaderBody />,
    document.querySelector("#loader")
  );
}

export default Loader;
