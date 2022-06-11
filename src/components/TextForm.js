import React from "react";
import PropTypes from "prop-types";
import { useState } from "react"; //📌📌📌

export default function TextForm(props) {
  // WORD COUNT 📌
  const countWord = () => {
    const textArr = text.split(/\s+/);
    const filterArr = textArr.filter((element) => {
      return element.length !== 0;
    });
    return filterArr.length;
  };

  // CHARACTER COUNT 📌
  const countChar = () => {
    const textArr = text.split(" ");
    const filterArr = textArr.filter((element) => {
      return element.length !== 0;
    });
    filterArr.forEach((e) => {
      console.log("the element is : ", e);
    });
  };

  // UPPPERCASE 📌
  const handleUpperClick = () => {
    // console.log("clicked on uppercase button ::::", text);
    // console.log(text.toUpperCase());
    // setText("You have click this upper case button");
    setText(text.toUpperCase());
    props.showAlert("Text converted to the uppsercase!", "success");
  };

  // LOWERCASE 📌
  const handleLowerClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Text converted to the lowercase!", "success");
  };

  // CLEAR 📌
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
    props.showAlert("Text cleared !", "success");
  };

  // CAPITALIZE EACH WORD 📌
  function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  const handleCapitalizeEachWord = () => {
    const newText = capitalizeEachWord(text);
    setText(newText);
    props.showAlert("All text is capitalized", "success");
  };

  // handleCopyTextFunc 📌
  function handleCopyTextFunc() {
    // const textElement = document.getElementById("textArea123");
    // textElement.select();
    // navigator.clipboard.writeText(textElement.value);
    // document.getSelection().removeAllRanges();
    // props.showAlert("Text copied !", "success");

    // Or
    navigator.clipboard.writeText(text);
    props.showAlert("Text copied !", "success");
  }

  // REMOVE EXTRA SPACES
  function handleRemoveExtraSpace() {
    const newText = text.split(/[ ]+/);
    const anotherNewText = newText.join(" ");
    // console.log(newText);
    // console.log(anotherNewText);
    setText(anotherNewText);
    props.showAlert("Removed extra spaces from the text !", "success");
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
                className="text-center mb-3"
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
              disabled={text.length === 0}
              className={`btn btn-outline-${
                props.myMode === "light" ? "primary" : props.myMode
              } mx-2 my-2`}
              onClick={handleUpperClick}
            >
              UPPERCASE
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-outline-${
                props.myMode === "light" ? "primary" : props.myMode
              } mx-2 my-2`}
              onClick={handleLowerClick}
            >
              lowercase
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-outline-${
                props.myMode === "light" ? "primary" : props.myMode
              } mx-2 my-2`}
              onClick={handleClearClick}
            >
              Clear
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-outline-${
                props.myMode === "light" ? "primary" : props.myMode
              } mx-2 my-2`}
              onClick={handleCapitalizeEachWord}
            >
              Capitalize Each Word
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-outline-${
                props.myMode === "light" ? "primary" : props.myMode
              } mx-2 my-2`}
              onClick={handleCopyTextFunc}
            >
              Copy text
            </button>
            <button
              disabled={text.length === 0}
              className={`btn btn-outline-${
                props.myMode === "light" ? "primary" : props.myMode
              } mx-2 my-2`}
              onClick={handleRemoveExtraSpace}
            >
              Remove Extra Space
            </button>
          </div>
        </div>
      </div>

      <div
        className="container my-5 "
        style={{ color: props.myMode === "light" ? "#343434" : "white" }}
      >
        <div className="row">
          <div className="col-md-6 col-10 col-xxl-6 mx-auto">
            <h3>Your text summary</h3>
            <p>
              {countWord()} words {countChar()} characters
            </p>
            <p>{0.008 * countWord()} Minute for read</p>

            <h3>Preview</h3>
            <p>{text.length > 0 ? text : "Nothing to preview"}</p>
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
