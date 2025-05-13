'use client';

import { Card, CardContent, Typography, Box, CardMedia } from '@mui/material';

export default function RPICard ({ title, description, image }) {
    return (
        <Card
            sx={{
                display: "flex",
                p: 2,
                boxShadow: 3,
                borderRadius: 2,
                margin: 2
            }}
        >
            <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardMedia
                    component="img"
                    // height="140"
                    image={image}
                    alt={title}
                    sx={{ width: "80%" }}
                />
            </Box>
            <CardContent>
                <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    fontFamily={"monospace"}
                >
                    {title}
                </Typography>
                <Typography
                    variant="body2"
                    sx={{ color: "text.secondary" }}
                    fontFamily={"monospace"}
                >
                    {description}
                </Typography>
            </CardContent>
            
        </Card>
    )
}   