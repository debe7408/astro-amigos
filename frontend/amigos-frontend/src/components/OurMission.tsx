"use client";
import * as React from "react";
import Link from "next/link";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import colors from "@/constants/colors";
import { CardActionArea, CardMedia, Grid } from "@mui/material";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const LINKS = [{ text: "/how-it-works", href: "/how-it-works" }];

export const OurMission: React.FC = ({}: {}) => {
  return (
    <Grid
      item
      xs={12}
      sx={{ paddingLeft: "200px", maxWidth: "1200px !important" }}
    >
      <h1>/our-mission</h1>
      <h2>
        problem and solution: Current methods for predicting natural disasters
        have significant limitations, often relying on isolated data sources and
        outdated techniques. This leads to less accurate predictions and delayed
        warnings, putting lives and the environment at risk. Our web app
        addresses this problem by combining satellite data and EMIT to enhance
        prediction accuracy and provide earlier warnings. We aim to
        revolutionize disaster prediction, making it more effective in
        safeguarding communities and mitigating disaster impacts. Our goal is to
        save lives and protect the environment by bridging the gap in early
        warning systems.
      </h2>
      <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
        {LINKS.map(({ href }) => (
          <Button variant="outlined" component={Link} href={href}>
            /how-it-works
          </Button>
        ))}
      </Grid>
    </Grid>
  );
};
