import { Box, Button, Grid, Paper, Typography } from "@mui/material";
import MUICarousel from "react-material-ui-carousel";

interface CarouselProps {
  items: Item[];
  animation?: "fade" | "slide";
  autoPlay?: boolean;
  swipe?: boolean;
  duration?: number;
}

interface ItemProps {
  key: number;
  item: Item;
}

export interface Item {
  name: string;
  description: string;
}

export const Carousel: React.FC<CarouselProps> = ({
  items,
  autoPlay,
  swipe,
  animation,
  duration,
}) => {
  return (
    <MUICarousel
      autoPlay={autoPlay}
      swipe={swipe}
      animation={animation}
      duration={duration}
    >
      {items.map((item, index) => (
        <CarouselItem key={index} item={item} />
      ))}
    </MUICarousel>
  );
};

const CarouselItem: React.FC<ItemProps> = ({ key, item }) => {
  return (
    <Paper style={{ height: "550px" }}>
      <Typography variant="h2" component="h2">
        {item.name}
      </Typography>
      {item.name == "Step #1" && <Grid container>
        <Grid item xs={6} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "20px",
        }}>
          <h2>Current model data</h2>
          <Box
            component="img"
            sx={{
              height: 370,
              width: 500,
            }}
            src="/#"
          />
        </Grid>
        <Grid item xs={6} style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          paddingBottom: "20px",
        }}>
          <h2>Emit data</h2>
          <Box
            component="img"
            sx={{
              height: 370,
              width: 500,
            }}
            src="/#"
          />

        </Grid>
      </Grid>}
      {item.name == "Step #2" && <Box
        component="img"
        sx={{
          height: 400,
          width: 800,
        }}
        src="/#"></Box>
      }
      <Typography variant="h1" component="p">
        {item.name != "Step #1" && item.name != "Step #2" && item.description}
      </Typography>


    </Paper>
  );
};
