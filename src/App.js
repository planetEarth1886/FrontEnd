import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

import defaultMarkers from "./markers";

function getTooltipContent(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value})`;
}

function App() {
  const markers = defaultMarkers.map(marker => ({
    ...marker,
    value: Math.floor(Math.random() * 100)
  }));

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
    <div style={{ width: "100vw", height: "97vh" }}>
      <ReactGlobe
        markers={markers}
        markerOptions={{
          getTooltipContent,
          activeScale: 1.1,
          enableTooltip: true,
          enterAnimationDuration: 3000,
          enterEasingFunction: ['Bounce', 'InOut'],
          exitAnimationDuration: 3000,
          exitEasingFunction: ['Cubic', 'Out'],
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

    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);

