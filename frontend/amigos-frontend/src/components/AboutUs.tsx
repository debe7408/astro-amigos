import * as React from "react";
import Image from "next/image";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import colors from "@/constants/colors";
import { CardActionArea, CardMedia, Grid } from "@mui/material";


export const AboutUs: React.FC = ({
}: {
    }) => {
    return (
        <Grid item xs={12} sx={{ paddingLeft: "15%;" }}>
            <h1>Our team</h1>
            <Grid sx={{ display: "flex", flexWrap: "wrap" }}>
                <Card sx={{ width: 250, marginRight: "20px", marginBottom: "20px" }}>
                    <CardActionArea href="https://www.linkedin.com/in/deividas-bendaravi%C4%8Dius-8b032b1b7/">
                        <CardMedia
                            sx={{ height: 250 }}
                            image="images/deividas_bendaravicius.jpg"
                            title="Team member"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Deividas Bendaravičius
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Team Lead
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250, marginRight: "20px", marginBottom: "20px" }}>
                    <CardActionArea href="https://www.linkedin.com/in/daria-tovstohan-1b244923b/">
                        <CardMedia
                            sx={{ height: 250 }}
                            image="images/daria_tovstohan.jpg"
                            title="Team member"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Daria Tovstohan
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Back-End Engineer
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250, marginRight: "20px", marginBottom: "20px" }}>
                    <CardActionArea href="https://www.linkedin.com/in/sandra-ciuladaite/">
                        <CardMedia
                            sx={{ height: 250 }}
                            image="images/sandra_ciuladaite.jpg"
                            title="Team member"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Sandra Čiuladaitė
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Front-End Developer
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
                <Card sx={{ width: 250, marginRight: "20px", marginBottom: "20px" }}>
                    <CardActionArea href="https://lt.linkedin.com/in/dbaliukynas">
                        <CardMedia
                            sx={{ height: 250 }}
                            image="images/domantas_baliukynas.jpg"
                            title="Team member"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Domantas Baliukynas
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Front-End Developer
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Grid>
        </Grid>
    );
};
