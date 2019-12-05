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
  root: {
    position: 'relative',
  },
  card: {
    borderRadius: '8px',
    height: '180px',
  },
  media: {
    height: '60%',
  },
  details: {
    paddingTop: theme.spacing(1),
    width: '100%',
  },
  link: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
  },
  favoriteButton: {
    position: 'absolute',
    bottom: '30%',
    right: '5%',
    height: '35px',
    width: '35px',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    borderRadius: '50%',
    boxShadow: theme.shadows[1],
  },
}));

const PostingCard = ({ posting }) => {
  const classes = useStyles();

  return (
    <article className={classes.root}>
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
      </Card>
      <Link
        className={classes.link}
        to={(location) => ({
          ...location,
          pathname: `/postings/${posting.id}`,
        })}
      />

      <FavoriteButton
        size="1.5rem"
        posting={posting}
        className={classes.favoriteButton}
      />
    </article>
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
