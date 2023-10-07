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
          <div style={{ position: "relative" }}>
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
                top: 0,
                left: 0,
                zIndex: -1,
                opacity: 0.75,
              }}
            >
              <source
                src="videos/main_page_video.mp4"
                type="video/mp4"
              ></source>
            </video>
            <Grid>
              <div
                style={{
                  position: "absolute",
                  top: "50%",
                  paddingLeft: "200px",
                  fontSize: "86px",
                  fontWeight: "700",
                  background:
                    "-webkit-linear-gradient(to right, #ccd6f6 70%, #64ffda 50%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                satellite sage
              </div>

              <div
                style={{
                  position: "absolute",
                  top: "63%",
                  paddingLeft: "200px",
                  color: "#8892b0",
                  fontSize: "22px",
                  fontWeight: "700",
                }}
              >
                predicting natural disasters with emit`s and satellite data
              </div>
            </Grid>
          </div>
        </Grid>
        <Grid item xs={12}>
          Labas
        </Grid>
      </Grid>
    </Box>
  );
}
