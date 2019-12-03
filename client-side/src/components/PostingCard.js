import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import {
  Card, makeStyles, Typography, CardContent,
} from '@material-ui/core';
import CardMedia from '@material-ui/core/CardMedia';
import { red } from '@material-ui/core/colors';
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
    <div style={{ position: 'relative' }}>
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
      <div className={classes.favoriteContainer}>
        <FavoriteButton posting={posting} />
      </div>
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
