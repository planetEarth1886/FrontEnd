
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

import CardStack from './CardStack';
import Card from './Card';

import defaultMarkers from "./markers";

import { defaultBarMarkerOptions, defaultDotMarkerOptions } from "react-globe";

function getTooltipContent(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value})`;
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
    <div style={{ width: "100vw", height: "96vh" }}>
      <ReactGlobe
        markers={markers}
        markerOptions={{
<<<<<<< HEAD
=======
          getTooltipContent,
>>>>>>> upstream/master
          activeScale: 1.1,
          enableTooltip: true,
          enterAnimationDuration: 3000,
          enterEasingFunction: ['Bounce', 'InOut'],
          exitAnimationDuration: 3000,
          exitEasingFunction: ['Cubic', 'Out'],
<<<<<<< HEAD
          getTooltipContent,
=======
          //getTooltipContent: marker => `${marker.city} (Sales: ${marker.value}.0M)`,
>>>>>>> upstream/master
          radiusScaleRange: [0.01, 0.05],
        }}
        onClickMarker={onClickMarker}
        onDefocus={onDefocus}
      />
      {details && (
        <div
          style={{
            background: "white",
            position: "absolute",
            fontSize: 20,
            top: 0,
            right: 0,
            padding: 12
          }}
        >
          <p>{details}</p>
          <p>
            EVENT: type={event.type}, position=
            {JSON.stringify(event.pointerEventPosition)})
          </p>
        </div>
      )}
<<<<<<< HEAD
    
=======
>>>>>>> upstream/master
      <CardStack
        height={500}
        width={400}
        background='#f8f8f8'
        hoverOffset={25}>

        <Card background='#2980B9'>
          <h1>Number 1</h1>
        </Card>

        <Card background='#27AE60'>
          <h1>Number 2</h1>
        </Card>

      </CardStack>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
export { Card, CardStack };
