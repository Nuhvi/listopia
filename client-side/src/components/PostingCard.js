import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, makeStyles, Typography, CardContent,
} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import FavoriteButton from './FavoriteButton';
import PlaceHolderFeatureImage from '../images/placeholder-posting-feature-image.jpg';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    borderRadius: '8px',
    height: '200px',
  },
  media: {
    width: '100%',
    height: '60%',
  },
  details: {
    width: '100%',
    height: '40%',
    paddingTop: theme.spacing(1),
  },
  favoriteContainer: {
    position: 'absolute',
    top: '50%',
    right: '10%',
    height: '40px',
    width: '20%',
    backgroundColor: 'white',
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: theme.shadows[1],
  },
}));

const PostingCard = ({ posting }) => {
  const classes = useStyles();

  return (

    <Card className={classes.card}>
      <CardMedia
        className={classes.media}
        image={PlaceHolderFeatureImage}
        title="posting feature image"
      />
      <CardContent className={classes.details}>
        <Typography variant="h6" component="h3">
          {`$ ${posting.price
            .toLocaleString()
            .split(',')
            .join(' ')}`}
        </Typography>
        <Typography
          variant="body2"
          color="textSecondary"
          component="p"
          noWrap
        >
          {`${posting.title}`}
        </Typography>
      </CardContent>

      <Link
        to={(location) => ({
          ...location,
          pathname: `/postings/${posting.id}`,
        })}
      />
      <div className={classes.favoriteContainer}>
        <FavoriteButton posting={posting} />
      </div>
    </Card>

  );
};

PostingCard.propTypes = {
  posting: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    favorited: PropTypes.bool.isRequired,
  }).isRequired,
};

export default PostingCard;
