import * as React from "react";
import Box from "@mui/material/Box";

import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import { MediaCard } from "@/components/MediaCard";
import { Divider, Grid } from "@mui/material";

export default function HomePage() {
  return (
    <Box sx={{ display: "flex", overflow: "hidden" }}>
      <Grid container>
        <Grid item xs={12}>
          <video
            playsInline
            autoPlay
            muted
            loop
            poster="polina.jpg"
            id="bgvid"
            style={{
              objectFit: "cover",
              width: "100vw",
              height: "100vh",
              // position: "fixed",
              top: 0,
              left: 0,
              zIndex: -1,
              opacity: 0.75,
            }}
          >
            <source src="videos/main_page_video.mp4" type="video/mp4"></source>
          </video>
        </Grid>
        <Grid item xs={12}>
          Labas
        </Grid>
      </Grid>
      {/* <Grid style={{
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        position: "fixed"
      }}>
        <span>ASTRO AMIGOS</span>
      </Grid> */}
    </Box>
  );
}
