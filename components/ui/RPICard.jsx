'use client';

import { Card, CardContent, Typography, Box, CardMedia, Grid2 } from '@mui/material';

export default function RPICard ({ title, description, image }) {
    return (
        <Card
            sx={{
                display: "flex",
                p: 2,
                boxShadow: 2,
                borderRadius: 4,
                margin: 5
            }}
        >

            <Grid2 container spacing={2}>
                <Grid2 size={6}>
                    <CardMedia
                        component="img"
                        // height="140"
                        image={image}
                        alt={title}
                        sx={{ width: "100%", padding: 5 }}
                    />
                </Grid2>
                <Grid2 size={6}>
                    <CardContent>
                        <Typography
                            gutterBottom
                            variant="h6"
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
                </Grid2>
            </Grid2>
        
            {/* <Box sx={{ display: "flex", flexDirection: "column" }}>
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
            </CardContent> */}
            
        </Card>
    )
}   