// import React, { useState } from "react";

export default function About(props) {
  // 1> 📌📌📌 ENABLE DARK MOOD 📌📌📌

  // HERE WE USED TWO STATE 📌📌📌
 const aboutStyle = {
  color: props.myMode === "dark"? "white":"#343434",
  backgroundColor: props.myMode === "dark"? "#343434":"white"
}
 


 

  return (
    <>
      <section>  
        <div className="text-center my-5">
          <h1  style={{color: props.myMode === "dark"? "white":"#343434"}}>Abou page</h1>
          <hr className="w-25 mx-auto" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-10 col-xxl-8 mx-auto">
              <div
                className="accordion"
                id="accordionPanelsStayOpenExample"
                style={aboutStyle}
              >
                <div className="accordion-item" style={aboutStyle}>
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingOne"
                  >
                    <button
                      className="accordion-button"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseOne"
                      aria-expanded="true"
                      aria-controls="panelsStayOpen-collapseOne"
                      style={aboutStyle}
                    >
                      Analize Your Text
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseOne"
                    className="accordion-collapse collapse show"
                    aria-labelledby="panelsStayOpen-headingOne"
                  >
                    <div className="accordion-body">
                    Text Utilites give you a way to analize your text quality quickly and aficiently. Be it word count, character count or 
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={aboutStyle}>
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingTwo"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseTwo"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseTwo"
                      style={aboutStyle}
                    >
                      Free To Use
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseTwo"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingTwo"
                  >
                    <div className="accordion-body">
                    Text Utilites is a free character counter tool that provide instant character count and word count statistic for a given text. Text Utilites reports the number of word and characters. Thus it is suitable for writing text with word/ character.
                    </div>
                  </div>
                </div>
                <div className="accordion-item" style={aboutStyle}>
                  <h2
                    className="accordion-header"
                    id="panelsStayOpen-headingThree"
                  >
                    <button
                      className="accordion-button collapsed"
                      type="button"
                      data-bs-toggle="collapse"
                      data-bs-target="#panelsStayOpen-collapseThree"
                      aria-expanded="false"
                      aria-controls="panelsStayOpen-collapseThree"
                      style={aboutStyle}
                    >
                      Brouser Compatible
                    </button>
                  </h2>
                  <div
                    id="panelsStayOpen-collapseThree"
                    className="accordion-collapse collapse"
                    aria-labelledby="panelsStayOpen-headingThree"
                  >
                    <div className="accordion-body">
                      This word counter software works in any web browsers such as chrome, FireFox, Interner Explorer, Safari, Opera. It suits to count characters in facebook, blog, books, excel document, essays, etc.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
