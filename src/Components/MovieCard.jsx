import React, { useRef, useEffect, useState } from "react";

function MovieCard(props) {
  return (
    <div className="movieCard">
      <table border="0px" width="500px">
        <tbody>
          <tr>
            <td style={{ textAlign: "center" }}>
              <span className="title centerAlign">{props.title}</span>
            </td>
            <td
              style={{
                width: "50px",
                margin: "auto",
                color: "orange",
                fontWeight: "bolder",
              }}
            >
              {props.rate}
            </td>
          </tr>
          <tr style={{ textAlign: "left" }}>
            <td colSpan="2">{props.description}</td>
          </tr>
          <tr>
            <td colSpan="2">
              <img
                src={props.posterUrl}
                alt="Logo"
                width="500"
                style={{ borderRadius: "5%" }}
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default MovieCard;
