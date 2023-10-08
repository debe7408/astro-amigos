"use client";
import { Button, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Carousel, Item } from "@/components/Carousel";

interface Props {}

const Prototype: React.FC<Props> = () => {
  const items: Item[] = [
    {
      name: "1. Collecting satellite`s and EMIT`s data",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "2. Analysing the data",
      description: "Hello World!",
    },
    {
      name: "3. Processing the data and combining results",
      description: "Data processed for map",
    },
    {
      name: "4. Acquiring final map with improved predictions",
      description: "Map view with prediction and current status across the globe",
    },
  ];

  return (
    <Grid container sx={{marginLeft: "200px", maxWidth: "1055px"}}>
      <Grid item xs={12}>
        <Typography variant="h4" component="h4">
          /prototype
        </Typography>
      </Grid>
      <Grid item xs={12}  sx={{textAlign: "center"}}>
        <Carousel items={items} animation="slide" />
      </Grid>
    </Grid>
  );
};

export default Prototype;
