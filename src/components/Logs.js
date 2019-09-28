import React from "react";

function Logs(props) {
  const { title, message, time, visible } = props;
  const deleteLog = () => {
    props.deleteLog(props.id);
  };

  // Styles
  const cardStyle = {
    padding: "1.5rem 2rem",
    border: "1px solid #dedede",
    backgroundColor: "#f9f9f9f9",
    margin: "1rem 0",
    position: "relative",
    display: visible ? "block" : "none"
  };
  const logTitleStyle = {
    margin: "0.5rem 0"
  };
  const logBodyStyle = {
    margin: "0.5rem 0"
  };
  const logTimeStyle = {
    color: "#858585"
  };
  const delBtnStyle = {
    position: "absolute",
    top: 10,
    right: 10,
    background: "transparent",
    color: "#858585",
    border: "none",
    outline: "none",
    padding: "0.5rem 1rem",
    textTransform: "capitalize",
    fontSize: "1.2rem",
    cursor: "pointer"
  };

  return (
    <div style={cardStyle}>
      <h1 style={logTitleStyle}>{title}</h1>
      <p style={logBodyStyle}>{message}</p>
      <span style={logTimeStyle}>{time}</span>
      <button onClick={deleteLog} style={delBtnStyle}>
        delete
      </button>
    </div>
  );
}

export default Logs;
