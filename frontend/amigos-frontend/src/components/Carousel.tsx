import { Button, Paper, Typography } from "@mui/material";
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
    <Paper>
      <Typography variant="h2" component="h2">
        {item.name}
      </Typography>
      <Typography variant="h4" component="p">
        {item.description}
      </Typography>

      <Button className="CheckButton">Check it out!</Button>
    </Paper>
  );
};
