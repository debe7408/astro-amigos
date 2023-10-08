"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import { AboutUs } from "@/components/AboutUs";
import { OurMission } from "@/components/OurMission";
import { motion } from "framer-motion";
import Prototype from "@/components/prototype";
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
                  // background:
                  //   "-webkit-linear-gradient(to right, #ccd6f6 70%, #64ffda 50%)",
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent",
                }}
              >
                <Grid sx={{display: "flex", alignItems: "center"}}>
                  <Box
                    component="img"
                    sx={{
                      height: 70,
                      width: 70,
                    }}
                    src="/images/logo.png"
                  />
                  <span style={{ color: "#ccd6f6" }}>satellite</span>
                  <span style={{ color: "#64ffda" }}>sage</span>
                </Grid>
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
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <OurMission />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <AboutUs />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.25 }}
          >
            <Prototype />
          </motion.div>
        </Grid>
      </Grid>
    </Box>
  );
}
