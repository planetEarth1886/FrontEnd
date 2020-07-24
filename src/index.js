<<<<<<< HEAD
import React, { useState } from "react";
import ReactDOM from "react-dom";
import ReactGlobe from "react-globe";

import CardStack from './CardStack';
import Card from './Card';

import defaultMarkers from "./markers";

function getTooltipContent(marker) {
  return `CITY: ${marker.city} (Value: ${marker.value})`;
}

function App() {
  const randomMarkers = defaultMarkers.map(marker => ({
    ...marker,
    value: Math.floor(Math.random() * 100)
  }));
  const [markers, setMarkers] = useState([]);
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
          getTooltipContent
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
      <button onClick={() => setMarkers(randomMarkers)}>
        Randomize markers
      </button>
      <button disabled={markers.length === 0} onClick={() => setMarkers([])}>
        Clear markers
      </button>
      <button
        disabled={markers.length === randomMarkers.length}
        onClick={() => setMarkers([...markers, randomMarkers[markers.length]])}
      >
        Add marker
      </button>
      <button
        disabled={markers.length === 0}
        onClick={() => setMarkers(markers.slice(0, markers.length - 1))}
      >
        Remove marker
      </button>
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
=======
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
>>>>>>> 61cea4d... Initialize project using Create React App
