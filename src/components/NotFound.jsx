import React from "react";
import "../assets/styles/NotFound.css";
import notFound from "../assets/images/sitechecker-404.png";

class NotFound extends React.Component {
  render() {
    return (
      <div className="container">
        <p>Oops! The page you were looking for doesn&apos;t exist.</p>
        <a href="/" className="button">
          Go back to the homepage
        </a>
        <img src={notFound} />
      </div>
    );
  }
}

export default NotFound;
