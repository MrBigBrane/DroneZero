"use client";

import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useState } from "react";
import Papa from "papaparse";

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export default function FileButton({ setFile, setData }) {
//   const [file, setFile] = useState(null);
//   const [data, setData] = useState([]); // Store extracted CSV data

  function handleChange(event) {
    const selectedFile = event.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);
    console.log("Selected File:", selectedFile.name);

    // Read file and parse CSV
    const reader = new FileReader();
    reader.onload = (e) => {
      if (!e.target?.result) return;

      // Parse CSV using Papaparse
      Papa.parse(e.target.result, {
        header: true, // Treat first row as headers
        skipEmptyLines: true, // Ignore empty lines
        complete: (result) => {
          console.log("Parsed Data:", result.data); // Logs array of objects

          // Extract only required values
          const extractedData = result.data.map((row) => ({
            time: row["Time"],
            co2_ppm: parseFloat(row["CO2 Measurement (PPM)"]),
            latitude: parseFloat(row["Latitude (degrees N)"]),
            longitude: parseFloat(row["Longitude (degrees E)"]),
            altitude: parseFloat(row["Altitude (m)"]),
          }));

          setData(extractedData);
          console.log("Extracted Data:", extractedData);
        },
      });
    };

    reader.readAsText(selectedFile);
  }

  return (
    <>
      <Button component="label" variant="contained" startIcon={<CloudUploadIcon />}>
        Upload CSV
        <VisuallyHiddenInput type="file" accept=".csv" onChange={handleChange} />
      </Button>
    </>
  );
}