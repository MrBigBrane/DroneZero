import React, { useState, CSSProperties } from "react";
import {
  useCSVReader,
  lightenDarkenColor,
  formatFileSize,
} from "react-papaparse";
import Papa from "papaparse";

const GREY = "#CCC";
const GREY_LIGHT = "rgba(255, 255, 255, 0.4)";
const DEFAULT_REMOVE_HOVER_COLOR = "#A01919";
const REMOVE_HOVER_COLOR_LIGHT = lightenDarkenColor(
  DEFAULT_REMOVE_HOVER_COLOR,
  40
);
const GREY_DIM = "#686868";
const HOVER_COLOR = "blue";

const styles = {
  zone: {
    alignItems: "center",
    border: `2px dashed ${GREY}`,
    borderRadius: 20,
    display: "flex",
    flexDirection: "column",
    height: "100%",
    justifyContent: "center",
    padding: 20,
    transition: "all 0.3s ease",
  },
  file: {
    background: "linear-gradient(to bottom, #EEE, #DDD)",
    borderRadius: 20,
    display: "flex",
    height: 120,
    width: 120,
    position: "relative",
    zIndex: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  info: {
    alignItems: "center",
    display: "flex",
    flexDirection: "column",
    paddingLeft: 10,
    paddingRight: 10,
  },
  size: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    marginBottom: "0.5em",
    justifyContent: "center",
    display: "flex",
  },
  name: {
    backgroundColor: GREY_LIGHT,
    borderRadius: 3,
    fontSize: 12,
    marginBottom: "0.5em",
  },
  progressBar: {
    bottom: 14,
    position: "absolute",
    width: "100%",
    paddingLeft: 10,
    paddingRight: 10,
  },
  remove: {
    height: 23,
    position: "absolute",
    right: 6,
    top: 6,
    width: 23,
    transition: "color 0.3s ease",
  },
};

export default function CSVReader({ setFile, file, setData, uploadData, setUploadData, className }) {
  const { CSVReader } = useCSVReader();
  const [zoneHover, setZoneHover] = useState(false);
  const [removeHoverColor, setRemoveHoverColor] = useState(
    DEFAULT_REMOVE_HOVER_COLOR
  );

  return (
    <CSVReader
      onUploadAccepted={(results, file) => {
        setZoneHover(false);

        if (results.data.length > 1) {
          // Ensure there's at least a header + 1 row
          const headers = results.data[0]; // Extract column names

          const extractedData = results.data
            .slice(1, results.data.length - 1)
            .map((row) => {
              let obj = {};
              headers.forEach((header, index) => {
                obj[header] = row[index]; // Assign value based on corresponding header
              });

              obj = {
                time: obj["Time"],
                co2_ppm: parseFloat(obj["CO2 Measurement (PPM)"]),
                latitude: parseFloat(obj["Latitude (degrees N)"]),
                longitude: parseFloat(obj["Longitude (degrees E)"]),
                altitude: parseFloat(obj["Altitude (m)"]),
              };
              return obj;
            });
          console.log(file);
          setData((prevData) => [
            ...prevData,
            { data: extractedData, filename: file.name },
          ]);
          setUploadData({ data: extractedData, filename: file.name });
          setFile(file);
        }
      }}
    >
      {({
        getRootProps,
        acceptedFile,
        ProgressBar,
        getRemoveFileProps,
        Remove,
      }) => (
        <div
          {...getRootProps()}
          style={{
            ...styles.zone,
            borderColor: zoneHover ? HOVER_COLOR : GREY,
            backgroundColor: zoneHover ? "rgba(0, 0, 255, 0.1)" : "transparent",
          }}
          onMouseEnter={() => setZoneHover(true)}
          onMouseLeave={() => setZoneHover(false)}
          className={className}
        >
          {file ? (
            <div style={styles.file} className="upload">
              <div style={styles.info}>
                <span style={styles.size}>{formatFileSize(file.size)}</span>
                <span style={styles.name}>{file.name}</span>
              </div>
              <div style={styles.progressBar}>
                <ProgressBar />
              </div>
              <div
                {...getRemoveFileProps()}
                style={{ ...styles.remove, color: removeHoverColor }}
                onMouseEnter={() =>
                  setRemoveHoverColor(REMOVE_HOVER_COLOR_LIGHT)
                }
                onMouseLeave={() =>
                  setRemoveHoverColor(DEFAULT_REMOVE_HOVER_COLOR)
                }
                onClick={(e) => {
                  getRemoveFileProps().onClick(e);
                  e.stopPropagation(); // Prevent triggering parent click event

                  // Remove this file's parsed data from setData
                  setData((prevData) =>
                    prevData.filter(
                      (item) =>
                        JSON.stringify(item) !== JSON.stringify(uploadData)
                    )
                  );

                  // Clear current file
                  setFile(null);
                  setUploadData([]);
                }}
              >
                <Remove color={removeHoverColor} />
              </div>
            </div>
          ) : (
            <p
              style={{
                textAlign: "center",
                fontFamily: "monospace",
                fontSize: 13,
              }}
            >
              Drop CSV file <br />
              here or click
              <br /> to upload
            </p>
          )}
        </div>
      )}
    </CSVReader>
  );
}
