"use client";

// IMPORTANT: the order matters!
import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { Circle, CircleMarker, MapContainer, Marker, Popup, TileLayer, Tooltip } from "react-leaflet";

import FileButton from "../buttons/FileButton";
import { useState } from "react";

export default function Map() {
  const [file, setFile] = useState(null);
  const [data, setData] = useState([]);

  const position = [37.2708243, -122.0169312]

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer
        center={position}
        zoom={11}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* <Marker position={position}>
          <Popup>
            This Marker icon is displayed correctly with <i>leaflet-defaulticon-compatibility</i>.
          </Popup>
        </Marker> */}
        {data.map((item, index) => {
          let color;
          if (item.co2_ppm > 1500) {
            color = "red";
          }
          else if (item.co2_ppm > 1000) {
            color = "orange";
          }
          else {
            color = "green";
          }
          return (
            <Circle
              key={index}
              center={[item.latitude, item.longitude]}
              pathOptions={{ color: color }}
              radius={1}
            >
              <Tooltip>
                Time: {item.time} <br />
                CO2: {item.co2_ppm}
                <br />
                
                Altitude: {item.altitude}
              </Tooltip>
            </Circle>
          );})}
      </MapContainer>

      <FileButton setData={setData} setFile={setFile} />
      {file && <p>File uploaded: {file.name}</p>}
      {data.length > 0 && (
        <pre
          style={{
            textAlign: "left",
            marginTop: "10px",
            maxHeight: "200px",
            overflowY: "auto",
          }}
        >
          {JSON.stringify(data, null, 2)}
        </pre>
      )}
    </div>
  );
}