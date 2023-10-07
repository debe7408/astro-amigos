"use client";
import { Button, Grid, Paper, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { Carousel, Item } from "@/components/Carousel";

interface Props {}

const HowItWorks: React.FC<Props> = () => {
  const items: Item[] = [
    {
      name: "Random Name #1",
      description: "Probably the most random thing you have ever seen!",
    },
    {
      name: "Random Name #2",
      description: "Hello World!",
    },
    {
      name: "Random Name #3",
      description: "Hello World!",
    },
    {
      name: "Random Name #4",
      description: "Hello World!",
    },
  ];

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1" component="h1">
          Hello There
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Carousel items={items} animation="slide" />
      </Grid>
    </Grid>
  );
};

export default HowItWorks;
