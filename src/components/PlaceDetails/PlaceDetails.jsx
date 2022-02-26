import React from "react";
import {
  Box,
  Typography,
  Button,
  Card,
  CardMedia,
  CardContent,
  CardActions,
  Chip,
} from "@material-ui/core";

import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneIcon from "@material-ui/icons/Phone";
import { Rating } from "@material-ui/lab";
import useStyles from "./styles";

function PlaceDetails({ place, selected,  refProps }) {
  const classes = useStyles();

  if (selected) refProps?.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return (
    <Card elevation={6}>
      <CardMedia
        style={{ height: 350 }}
        image={
          place.photo
            ? place.photo.images.large.url
            : "https://www.foodserviceandhospitality.com/wp-content/uploads/2016/09/Restaurant-Placeholder-001.jpg"
        }
        title={place.name}
      />
      <CardContent>
        <Typography gutterBottom variant="h5">
          {place.name}
        </Typography>
        <Box display="flex" justifyContent="space-between">
          <Rating value={Number(place.rating)} readOnly />

          <Typography gutterBottom variant="subtitle2">
            Out of {place.num_reviews} reviews
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle">Price</Typography>
          <Typography gutterBottom variant="subtitle2">
            {place.price_level}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Typography variant="subtitle">Ranking</Typography>
          <Typography gutterBottom variant="subtitle2">
            {place.ranking}
          </Typography>
        </Box>
        {place?.awards?.map((award) => {
          return (
            <Box my={1} display="flex" justifyContent="space-between">
              <img src={award.images.small} alt={award.display_name} />
              <Typography variant="subtitle2" color="textSecondary">
                {award.display_name}
              </Typography>
            </Box>
          );
        })}

        {place?.cuisine?.map(({ name }) => {
          return (
            <Chip
              key={name}
              label={name}
              size="small"
              className={classes.chip}
            />
          );
        })}

        {place?.address && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.subtitle}
          >
            <LocationOnIcon /> {place.address}
          </Typography>
        )}
        {place?.phone && (
          <Typography
            gutterBottom
            variant="body2"
            color="textSecondary"
            className={classes.spacing}
          >
            <PhoneIcon /> {place.phone}
          </Typography>
        )}
        <CardActions>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.web_url, "_blank")}
          >
            Trip advisor
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => window.open(place.website, "_blank")}
          >
            Website
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}

export default PlaceDetails;
