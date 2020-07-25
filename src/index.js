
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

import CardStack from './CardStack';
import Card from './Card';

import defaultMarkers from "./markers";

import { defaultBarMarkerOptions, defaultDotMarkerOptions } from "react-globe";

import KR from './info/KR'

var emojiFlags = require('emoji-flags');

function showflag() {
  return " " + emojiFlags.countryCode('KR').emoji + " ";
}

function getTooltipContent(marker) {
  // return `CITY: ${marker.city} (Value: ${marker.value})`;
  return `${marker.city}`;

}

// var header = document.querySelector('header');
// var section = document.querySelector('section');

// var requestURL = "http://planet-earth.run.goorm.io/json_result/?geo=KR";
// var request = new XMLHttpRequest();
// request.open('GET', requestURL);
// request.responseType = 'json';
// request.send();
// request.onload = function () {
//   var listkeywords = request.response;
//   populateHeader(listkeywords);
//   showKeywords(listkeywords);
// }


// function populateHeader(jsonObj) {
//   var myH1 = document.createElement('h5');
//   myH1.textContent = jsonObj['date'];
//   header.appendChild(myH1);
// }

// function showKeywords(jsonObj) {
//   var keywords = jsonObj['keywords'];
//   for (var i = 0; i < keywords.length; i++) {
//     var myArticle = document.createElement('article');
//     var myH2 = document.createElement('h3');
//     var myPara1 = document.createElement('a');
//     myH2.textContent = keywords[i].title;
//     myPara1.textContent = 'Content: ' + keywords[i].content;
//     myArticle.appendChild(myH2);
//     myArticle.appendChild(myPara1);
//     section.appendChild(myArticle);
//   }
// }
const newDateData = KR.dates.map((item, index) => {
  return (
    <center>
      <p key={index}>
        <p>{showflag('KR')}
          {item.date}
          {/* {item.content} */}
          {showflag('KR')}
        </p>
      </p>
    </center>
  );
});
const newArrayData = KR.keywords.map((item, index) => {
  return (
    <p key={index}>
      {index + 1 + ". "}
      {item.title}
    </p>
  );
});
const newContentData = KR.keywords.map((item, index) => {
  return (
    <p key={index}>
      <p style={{ marginLeft: 2 + 'em', marginRight: 2 + 'em' }}>
        {item.content}
      </p>
    </p>
  );
});

function App() {

  const markers = defaultMarkers.map(marker => ({
    ...marker,
    value: Math.floor(Math.random() * 100)
  }));
  // const [markers] = useState([]);
  const [event, setEvent] = useState(null);
  const [details, setDetails] = useState(null);

  function onClickMarker(marker, markerObject, event) {
    setEvent({
      type: "CLICK",
      marker,
      markerObjectID: markerObject.uuid,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(getTooltipContent(marker));
    //setDetails(showCard(marker));
  }

  function onDefocus(previousCoordinates, event) {
    setEvent({
      type: "DEFOCUS",
      previousCoordinates,
      pointerEventPosition: { x: event.clientX, y: event.clientY }
    });
    setDetails(null);
  }

  return (

    <div style={{ width: "100vw", height: "97vh" }}>

      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent,
          activeScale: 1.1,
          enableGlow: false,
          enableTooltip: true,
          enterAnimationDuration: 3000,
          enterEasingFunction: ['Bounce', 'InOut'],
          exitAnimationDuration: 3000,
          exitEasingFunction: ['Cubic', 'Out'],
          radiusScaleRange: [0.01, 0.01],
        }}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />

      {details && (
        <div
          style={{
            //background: "white",
            position: "absolute",
            fontSize: 18,
            top: 20,
            right: 50,
            padding: 10,

          }}
        >

          <p>
            <div>
              <CardStack
                height={650}
                width={400}
                //background='#f8f8f8'
                hoverOffset={100}
                borderRadius={15}>
                <Card background='#540b0e' borderRadius={15}>
                  {/* <div></div> */}
                  <center><h3><font color="white">
                    {newDateData[0]}</font></h3></center>
                </Card>
                <Card background='#6F2B2C' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[0]}
                    </ul>
                  </h3>
                  <h6>{newContentData[0]}</h6>
                </Card>
                <Card background='#924130' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[1]}
                    </ul>
                  </h3>
                  <h6>{newContentData[1]}</h6>
                </Card>
                <Card background='#4D4B58' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[2]}
                    </ul>
                  </h3>
                  <h6>{newContentData[2]}</h6>



                </Card>
                <Card background='#C5A763' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[3]}
                    </ul>
                  </h3>
                  <h6>{newContentData[3]}</h6>
                </Card>
                <Card background='#827F7B' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[4]}
                    </ul>
                  </h3>
                  <h6>{newContentData[4]}</h6>
                </Card>
                <Card background='#5B4540' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[5]}
                    </ul>
                  </h3>
                  <h6>{newContentData[5]}</h6>
                </Card>
                <Card background='#594F33' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[6]}
                    </ul>
                  </h3>
                  <h6>{newContentData[6]}</h6>
                </Card>
                <Card background='#CDC2A2' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[7]}
                    </ul>
                  </h3>
                  <h6>{newContentData[7]}</h6>
                </Card>
                <Card background='#758467' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[8]}
                    </ul>
                  </h3>
                  <h6>{newContentData[8]}</h6>
                </Card>
                <Card background='#B6B36E' borderRadius={15}>
                  <h3>
                    <ul>
                      {newArrayData[9]}
                    </ul>
                  </h3>
                  <h6>{newContentData[9]}</h6>
                </Card>
              </CardStack></div>

          </p>
        </div>
      )
      }
    </div >

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export { Card, CardStack };
