import React from "react";
import "../style/Wrong.css";
import { Link } from "react-router-dom";

function WrongPage() {
  return (
    <div className="body">
      <div className="divNotFuund">
        <p className="titleWrong">Error</p>
        <h1 className="titleMainWrong">404</h1>
        <p className="titleSecondTitle">
          you just hit a route that doesn't exist
        </p>
        <Link to="/">
          <p className="titleSecondTitle">Go Home</p>
        </Link>
      </div>
    </div>
  );
}

export default WrongPage;
