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
    paddingTop: '110%',
    borderRadius: '8px',
  },
  container: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    top: '0',
    left: '0',
    display: 'flex',
    flexDirection: 'column',
  },
  media: {
    width: '100%',
    height: '100%',
  },
  details: {
    width: '100%',
    height: '40%',
    paddingTop: theme.spacing(1),
  },
}));

const PostingCard = ({ posting }) => {
  const classes = useStyles();

  return (
    <div>
      <Link
        to={(location) => ({
          ...location,
          pathname: `/postings/${posting.id}`,
        })}
      >
        <Card className={classes.card}>
          <div className={classes.container}>
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
          </div>
        </Card>
      </Link>
      <FavoriteButton postingId={posting.id} />
    </div>
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
