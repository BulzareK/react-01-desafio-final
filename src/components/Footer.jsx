import React from "react";

const textContenedor = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  backgroundColor: "indigo",
  width: "100%",
  marginTop: "10px",
};

const text = {
  margin: "0px",
  paddingTop: "10px",
};

const studentName = {
  width: "100%",
  marginTop: "10px",
  display: "flex",
  justifyContent: "center",
};

function Footer() {
  return (
    <div style={textContenedor}>
      <p style={text}>Creado por:</p>
      <h4 style={studentName}>ENRIQUE VALDERRAMA MORAGA - G30</h4>
    </div>
  );
}

export default Footer;
