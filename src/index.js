import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";
import defaultMarkers from "./markers";
import Posts, { HelloCountry } from './Posts'

var clicked = 'KR';
function getTooltipContent(marker) {
  // return `CITY: ${marker.city} (Value: ${marker.value})`;
  // console.log(`${marker.city}`)
  clicked = `${marker.code}`
  return `${marker.city}`;
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
    <div style={{ width: "100vw", height: "100vh" }}>
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
        //onClickMarker={(marker) => clicked = `${marker.city}`} //console.log(marker.city)}
        onDefocus={onDefocus}
      />

      {details && (
        <div
          style={{
            position: "absolute",
            fontSize: 18,
            top: 20,
            right: 50,
            padding: 10,
          }}
        >
          <HelloCountry name={clicked} color="red" />
          <Posts />
        </div>
      )
      }

    </div >
  );
}
const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
