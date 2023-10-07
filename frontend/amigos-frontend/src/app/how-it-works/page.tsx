"use client";
import { Button, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Carousel, Item } from "@/components/Carousel";

interface Props {}

const HowItWorks: React.FC<Props> = () => {
  const items: Item[] = [
    {
      name: "Step #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Step #2",
      description: "Hello World!",
    },
    {
      name: "Step #3",
      description: "Data processed for map",
    },
    {
      name: "Step #4",
      description: "Map view with prediction and current status across the globe",
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1" component="h1">
          /how-it-works
        </Typography>
      </Grid>
      <Grid item xs={12}  style={{textAlign: "center"}}>
        <Carousel items={items} animation="slide" />
      </Grid>
    </Grid>
  );
};

export default HowItWorks;
