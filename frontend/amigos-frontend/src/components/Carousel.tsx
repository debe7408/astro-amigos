import {
  Box,
  Button,
  CircularProgress,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
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

const CarouselItem: React.FC<ItemProps> = ({ item }) => {
  return (
    <Paper sx={{ height: "550px" }}>
      <Typography variant="h2" component="h2" sx={{ fontSize: 50 }}>
        {item.name}
      </Typography>
      {item.name == "4. Acquiring final map with improved predictions" && (
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 450,
                width: 600,
              }}
              src="/images/step_4_photo.jpg"
            />
          </Grid>
        </Grid>
      )}
      {item.name == "2. Analysing the data" && (
        <Grid container>
          <Grid
            item
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <Box
              component="img"
              sx={{
                height: 450,
                width: 600,
              }}
              src="/images/step_2_photo.jpg"
            />
          </Grid>
        </Grid>
      )}
      {item.name == "1. Collecting satellite`s and EMIT`s data" && (
        <Grid container>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <h2>Current model data</h2>
            <Box
              component="img"
              sx={{
                height: 370,
                width: 500,
              }}
              src="/images/current_model_data.jpg"
            />
          </Grid>
          <Grid
            item
            xs={6}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              paddingBottom: "20px",
            }}
          >
            <h2>Emit data</h2>
            <Box
              component="img"
              sx={{
                height: 370,
                width: 500,
              }}
              src="/images/emit_data.jpg"
            />
          </Grid>
        </Grid>
      )}

      <Typography variant="h1" component="p">
        {item.name != "1. Collecting satellite`s and EMIT`s data" &&
          item.name != "2. Analysing the data" &&
          item.name != "3. Processing the data and combining results" &&
          item.name != "4. Acquiring final map with improved predictions" &&
          item.description}
      </Typography>
      {item.name == "3. Processing the data and combining results" && (
        <Grid
          sx={{
            textAlign: "center",
            alignItems: "center",
          }}
        >
          <CircularProgress
            sx={{ color: "#ccd6f6", marginTop: "150px" }}
            size="150px"
          />
        </Grid>
      )}
    </Paper>
  );
};
