import React from "react";

export default function Alert(props) {
  // CAPITALIZE FUNCTION FOR ALEAR TYPE 'SUCCESS'
  const capitalize = (string) => {
    let lower = string.toLowerCase();
    let capt = lower.charAt(0).toUpperCase() + lower.slice(1);
    // console.log(capt);
    return capt;
  };
  return (
    <div style={{ height: "50px" }}>
      {props.myAlert && (
        <div
          className={`alert alert-${props.myAlert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong> {capitalize(props.myAlert.type)}</strong> {props.myAlert.msg}
        </div>
      )}
    </div>
  );
}
