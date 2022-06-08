import React from "react";
import PropTypes from "prop-types";
import { useState } from "react"; //📌📌📌

export default function TextForm(props) {
  // UPPPERCASE 📌
  const handleUpperClick = () => {
    // console.log("clicked on uppercase button ::::", text);
    // console.log(text.toUpperCase());
    // setText("You have click this upper case button");
    setText(text.toUpperCase());
  };

  // LOWERCASE 📌
  const handleLowerClick = () => {
    const newText = text.toLowerCase();
    setText(newText);
  };

  // CLEAR 📌
  const handleClearClick = () => {
    const newText = "";
    setText(newText);
  };

  // CAPITALIZE EACH WORD 📌
  function capitalizeEachWord(str) {
    return str.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  }
  const handleCapitalizeEachWord= () => {
    const newText = capitalizeEachWord(text);
    setText(newText);
  };

  // handleCopyTextFunc 📌
  function handleCopyTextFunc(){
    const textElement = document.getElementById('textArea123');
    textElement.select();
    navigator.clipboard.writeText(textElement.value);
  }
  
  // REMOVE EXTRA SPACES
  function handleRemoveExtraSpace(){
    const newText = text.split(/[ ]+/);
    const anotherNewText = newText.join(" ");
    console.log(newText);
    console.log(anotherNewText);
   
    setText(anotherNewText);
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
              <h3 className="text-center">{props.heading}</h3>
              <textarea
                className="form-control"
                id="textArea123"
                rows="8"
                onChange={handdleOnChange}
                value={text}
                placeholder="Enter your text here"
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

      <div className="container my-5">
        <div className="row">
          <div className="col-md-6 col-10 col-xxl-6 mx-auto">
            <h3>Your text summary</h3>
            <p>
              {text.split(" ").length} words {text.length} characters
            </p>
            <p>{0.008 * text.split(" ").length} Minute for read</p>

            <h3>Preview</h3>
            <p>{text}</p>
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
