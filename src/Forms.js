import React from "react";
import "./Forms.css";

export default function Forms() {
  return (
    <div className="Forms container">
      <div className="row">
        <div className="col-md-6">
          <form>
            <input type="search" autoFocus={true} className="form-control" />
          </form>
        </div>{" "}
        <div className="col-md-6">
          <select id="currency" className="form-select">
            <option value="united-states-dollar">United States Dollars</option>
            <option value="canadian-dollar">Canadian Dollars</option>
          </select>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <form>
            <input type="search" autoFocus={true} className="form-control" />
          </form>
        </div>{" "}
        <div className="col-md-6">
          <select id="currency" className="form-select">
            <option value="united-states-dollar">United States Dollars</option>
            <option value="canadian-dollar">Canadian Dollars</option>
          </select>
        </div>
      </div>
    </div>
  );
}
