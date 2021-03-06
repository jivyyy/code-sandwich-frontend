import React from "react";
import { Link, withRouter } from "react-router-dom";
import "./MenuTitle.scss";

class MenuTitle extends React.Component {
  render() {
    return (
      <div className="MenuTitle">
        <div className="category">
          <a className="category-name" href="#">
            프레쉬&라이트
          </a>
          <button className="selectbt" type="button"></button>
        </div>
        <h2 className="name">{this.props.name}</h2>
        <p className="eng">{this.props.eng}</p>
        <p className="cal">{this.props.kcal} kcal</p>
        <div className="sns">
          <a className="fb" href="#" alt="facebooklink"></a>
          <a className="url" href="#" alt="copyUrl"></a>
        </div>
      </div>
    );
  }
}

export default MenuTitle;
