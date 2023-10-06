import * as React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import colors from "@/constants/colors";

interface MediaCardProps {
  heading: string;
  text: string;
}

export const MediaCard: React.FC<MediaCardProps> = ({
  heading,
  text,
}: {
  heading: string;
  text: string;
}) => {
  return (
    <Card
      style={{
        color: colors.primary[1],
      }}
    >
      <Image
        alt="Random image"
        src="https://source.unsplash.com/random"
        width={640}
        height={480}
        style={{
          maxWidth: "100%",
          height: "200px",
          objectFit: "cover",
        }}
      />
      <CardContent
        sx={{
          backgroundColor: colors.neutral[8],
        }}
      >
        <Typography gutterBottom variant="h5" component="div">
          {heading}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {text}
        </Typography>
      </CardContent>
      <CardActions
        sx={{
          backgroundColor: colors.neutral[7],
        }}
      >
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
};
