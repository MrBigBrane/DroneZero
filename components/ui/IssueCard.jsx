'use client'

import { Card, CardContent, Typography, Box } from '@mui/material';
import Image from 'next/image';

export default function IssueCard({ title, description, image, title2, description2, image2 }) {
  return (
    <Card sx={{ width: "100%", p: 2, boxShadow: 3, borderRadius: 2 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: 2,
        }}
      >
        {[
          { img: image, title, desc: description },
          { img: image2, title: title2, desc: description2 },
        ].map((item, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 45%",
              minWidth: 300,
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 250, // fixed height for consistency
                backgroundColor: "#f0f0f0", // optional light background
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                overflow: "hidden",
              }}
            >
              <Image
                src={item.img}
                alt={`image-${index}`}
                fill
                style={{ objectFit: "contain", backgroundColor: "white", borderRadius: 2, border: "2px solid #ccc" }}
                
              />
            </Box>

            <CardContent>
              <Typography variant="h6" fontFamily="monospace" gutterBottom>
                {item.title}
              </Typography>
              <Typography
                variant="body2"
                fontFamily="monospace"
                color="text.secondary"
              >
                {item.desc}
              </Typography>
            </CardContent>
          </Box>
        ))}
      </Box>
    </Card>
  );
}
