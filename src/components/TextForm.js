import React from "react";
import PropTypes from "prop-types";
import { useState } from "react"; //📌📌📌

export default function TextForm(props) {
  // UPPPERCASE 📌
  const handleUpperClick = () => {
    if (text.length !== 0) {
      // console.log("clicked on uppercase button ::::", text);
      // console.log(text.toUpperCase());
      // setText("You have click this upper case button");
      setText(text.toUpperCase());
      props.showAlert("Text converted to the uppsercase!", "success");
    } else {
      props.showAlert("You have not any text in the text box", "danger");
    }
  };

  // LOWERCASE 📌
  const handleLowerClick = () => {
    if (text.length !== 0) {
      const newText = text.toLowerCase();
      setText(newText);
      props.showAlert("Text converted to the lowercase!", "success");
    } else {
      props.showAlert("You have not any text in the text box", "danger");
    }
  };

  // CLEAR 📌
  const handleClearClick = () => {
    if (text.length !== 0) {
      const newText = "";
      setText(newText);
      props.showAlert("Text cleared !", "success");
    } else {
      props.showAlert("You have not any text in the text box", "danger");
    }
  };

  // CAPITALIZE EACH WORD 📌
  function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  const handleCapitalizeEachWord = () => {
    if (text.length !== 0) {
      const newText = capitalizeEachWord(text);
      setText(newText);
      props.showAlert("All text is capitalized", "success");
    } else {
      props.showAlert("You have not any text in the text box", "danger");
    }
  };

  // handleCopyTextFunc 📌
  function handleCopyTextFunc() {
    if (text.length !== 0) {
      const textElement = document.getElementById("textArea123");
      textElement.select();
      navigator.clipboard.writeText(textElement.value);
      props.showAlert("Text copied !", "success");
    } else {
      props.showAlert("You have not any text in the text box", "danger");
    }
  }

  // REMOVE EXTRA SPACES
  function handleRemoveExtraSpace() {
    if (text.length !== 0) {
      const newText = text.split(/[ ]+/);
      const anotherNewText = newText.join(" ");
      // console.log(newText);
      // console.log(anotherNewText);
      setText(anotherNewText);
      props.showAlert("Removed extra spaces from the text !", "success");
    } else {
      props.showAlert("You have not any text in the text box", "danger");
    }
  }

  // ON CHANGE FUNCTION 📌
  const handdleOnChange = (event) => {
    setText(event.target.value);
  };

  // THIS IS STATE 📌📌📌
  const [text, setText] = useState("");
  // text = "this is another text"; // Wrong way to change the text
  // setText("this is another text"); // Wrong way to change the text

  return (
    <>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8 col-10 col-xxl-8 mx-auto">
            <div className="mb-3">
              <h3
                className="text-center"
                style={{
                  color: props.myMode === "light" ? "#343434" : "white",
                }}
              >
                {props.heading}
              </h3>
              <textarea
                className="form-control"
                id="textArea123"
                rows="8"
                onChange={handdleOnChange}
                value={text}
                placeholder="Enter your text here"
                style={{
                  backgroundColor:
                    props.myMode === "light" ? "white" : "#343434",
                  color: props.myMode === "light" ? "#343434" : "white",
                }}
              ></textarea>
            </div>

            <button
              className="btn btn-outline-info mx-2"
              onClick={handleUpperClick}
            >
              UPPERCASE
            </button>
            <button
              className="btn btn-outline-info mx-2"
              onClick={handleLowerClick}
            >
              lowercase
            </button>
            <button
              className="btn btn-outline-info mx-2"
              onClick={handleClearClick}
            >
              Clear
            </button>
            <button
              className="btn btn-outline-info mx-2"
              onClick={handleCapitalizeEachWord}
            >
              Capitalize Each Word
            </button>
            <button
              className="btn btn-outline-info mx-2"
              onClick={handleCopyTextFunc}
            >
              Copy text
            </button>
            <button
              className="btn btn-outline-info mx-2"
              onClick={handleRemoveExtraSpace}
            >
              Remove Extra Space
            </button>
          </div>
        </div>
      </div>

      <div
        className="container my-5"
        style={{ color: props.myMode === "light" ? "#343434" : "white" }}
      >
        <div className="row">
          <div className="col-md-6 col-10 col-xxl-6 mx-auto">
            <h3>Your text summary</h3>
            <p>
              {text.split(" ").length} words {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length} Minute for read</p>

            <h3>Preview</h3>
            <p>
              {text.length > 0
                ? text
                : "Enter something in the textbox above to preview it here"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

TextForm.propTypes = {
  heading: PropTypes.string.isRequired,
};
TextForm.defaultProps = {
  heading: "Set heading here",
};
