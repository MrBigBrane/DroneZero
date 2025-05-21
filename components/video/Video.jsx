import React from 'react';
//import DroneFlightTest from '@/components/media/DroneFlightTest.mp4';


export default function video_player() {
    return (
        <iframe width={"100%"} height={400} style={{ justifyContent: "center",  marginTop: 20, marginBottom: 20}} src="https://www.youtube.com/embed/lSWDK9mu1hs?si=0r5gc83RDrRsW7Dh" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
    );

}