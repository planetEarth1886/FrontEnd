
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

import CardStack from './CardStack';
import Card from './Card';

import defaultMarkers from "./markers";

import { defaultBarMarkerOptions, defaultDotMarkerOptions } from "react-globe";

function getTooltipContent(marker) {
  // return `CITY: ${marker.city} (Value: ${marker.value})`;
  return `${marker.city}`;

}


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

    <div style={{ width: "99vw", height: "97vh" }}>
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
            fontSize: 20,
            top: 20,
            right: 50,
            padding: 10
          }}
        >


          {/* <p>{details}</p> */}


          <p>
            <div>
              <CardStack
                height={650}
                width={300}
                //background='#f8f8f8'
                hoverOffset={100}
                borderRadius={15}>
                <Card background='#540b0e' borderRadius={15}>
                  <h5><font color="white">
                    오늘의 키워드</font></h5>
                </Card>
                <Card background='#6F2B2C' borderRadius={15}>
                  <h3>Number 1</h3>
                </Card>
                <Card background='#924130' borderRadius={15}>
                  <h3>Number 2</h3>
                </Card>
                <Card background='#4D4B58' borderRadius={15}>
                  <h3>Number 3</h3>
                </Card>
                <Card background='#C5A763' borderRadius={15}>
                  <h3>Number 4</h3>
                  <a href="http://www.naver.com">abc</a>
                </Card>
                <Card background='#827F7B' borderRadius={15}>
                  <h3>Number 5</h3>
                </Card>
                <Card background='#5B4540' borderRadius={15}>
                  <h3>Number 6</h3>
                </Card>
                <Card background='#594F33' borderRadius={15}>
                  <h3>Number 7</h3>
                </Card>
                <Card background='#CDC2A2' borderRadius={15}>
                  <h3>Number 8</h3>
                </Card>
                <Card background='#758467' borderRadius={15}>
                  <h3>Number 9</h3>
                </Card>
                <Card background='#B6B36E' borderRadius={15}>
                  <h3>Number 10</h3>
                </Card>
              </CardStack></div>

          </p>
        </div>
      )}
    </div>

  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export { Card, CardStack };
