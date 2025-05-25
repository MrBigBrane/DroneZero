"use client";

import "leaflet/dist/leaflet.css";
import "leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.webpack.css";
import "leaflet-defaulticon-compatibility";

import { Circle, MapContainer, Polyline, TileLayer, Tooltip, useMap } from "react-leaflet";
import { useEffect } from "react";

export default function Map({ data }) {

  const defaultPosition = [37.2708243, -122.0169312];
  const colorArray = ["red", "orange", "green", "blue", "purple", "black"];
  let first = true;

  return (
    <div style={{ height: "100vh", width: "100vw" }}>
      <MapContainer
        center={defaultPosition}
        zoom={10}
        scrollWheelZoom={true}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {/* Update center and zoom dynamically */}
        <MapUpdater data={data.length > 0 ? data[data.length - 1].data : []} />

        {data.map((datapiece, index) =>
          datapiece.data.map((item, index) => {
            // console.log(item);
            let color =
              item.co2_ppm > 1500
                ? "red"
                : item.co2_ppm > 1000
                  ? "orange"
                  : "green";
            if (first) {
              first = false;
            return (
              <Circle
                className={"mappoint"}
                key={index}
                center={[item.latitude, item.longitude]}
                pathOptions={{ color }}
                radius={2}
              >
                <Tooltip>
                  Time: {item.time} <br />
                  CO₂: {item.co2_ppm} ppm
                  <br />
                  Altitude: {item.altitude} m
                </Tooltip>
              </Circle>
            );
            }
            else {
              return (
                <Circle
                  key={index}
                  center={[item.latitude, item.longitude]}
                  pathOptions={{ color }}
                  radius={2}
                >
                  <Tooltip>
                    Time: {item.time.substring(0, 19)} <br />
                    CO₂: {item.co2_ppm} ppm
                    <br />
                    Altitude: {item.altitude} m
                  </Tooltip>
                </Circle>
              );}})
        )}
        {data.map((item, index) => {
          return (
            <Polyline
              key={index}
              positions={item.data.map((item) => [
                item.latitude,
                item.longitude,
              ])}
              color={colorArray[index % colorArray.length]}
            />
          );
        })}
      </MapContainer>
    </div>
  );
}

function MapUpdater({ data }) {
  const map = useMap();

  useEffect(() => {
    if (data.length > 0) {
      const newCenter = [data[0].latitude, data[0].longitude];
      map.setView(newCenter, 20);
    }
  }, [data, map]);

  return null;
}
