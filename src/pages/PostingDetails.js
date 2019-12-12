import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Card,
  CardMedia,
  makeStyles,
  Typography,
  CardContent,
} from '@material-ui/core';
import { fetchPostings } from '../actions';
import FavoriteButton from '../components/FavoriteButton';
import PlaceHolderFeatureImage from '../images/placeholder-posting-feature-image.jpg';
import Layout from './Layout';

const useStyles = makeStyles((theme) => ({
  card: {
    position: 'relative',
    borderRadius: 0,
    boxShadow: 'none',
    background: 'none',
  },
  media: {
    height: '25vh',
    margin: 0,
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
  desc: {
    padding: theme.spacing(1, 0),
    margin: theme.spacing(1, 0),
    borderTop: `1px solid ${theme.palette.grey[300]}`,
    borderBottom: `1px solid ${theme.palette.grey[300]}`,
  },
  favoriteButton: {
    position: 'absolute',
    top: '22.5vh',
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

const PostingNotFound = () => <p>Loading ...</p>;

const PostingDetails = ({ postings, fetchPostings }) => {
  const classes = useStyles();
  useEffect(() => {
    fetchPostings();
  }, [fetchPostings]);

  const { id } = useParams();
  const posting = postings.find((posting) => posting.id === Number(id));

  return posting ? (
    <Layout>
      <Card className={classes.card}>
        <CardMedia
          component="figure"
          className={classes.media}
          image={PlaceHolderFeatureImage}
          title="posting feature image"
        />
        <CardContent className={classes.details} component="header">
          <Typography variant="h6" component="h3">
            {`$ ${posting.price
              .toLocaleString()
              .split(',')
              .join(' ')}`}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="h1"
            noWrap
          >
            {`${posting.title}`}
          </Typography>
          <Typography
            variant="body2"
            color="textSecondary"
            component="p"
            className={classes.desc}
          >
            {`${posting.desc}`}
          </Typography>
        </CardContent>

        <FavoriteButton
          size="1.5rem"
          posting={posting}
          className={classes.favoriteButton}
        />
      </Card>
    </Layout>
  ) : (
    <PostingNotFound />
  );
};

PostingDetails.propTypes = {
  fetchPostings: PropTypes.func.isRequired,
  postings: PropTypes.arrayOf(
    PropTypes.shape({
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
      favorited: PropTypes.bool.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  postings: state.postings.data,
});

const mapDispatchToProps = (dispatch) => ({
  fetchPostings: () => fetchPostings(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(PostingDetails);
