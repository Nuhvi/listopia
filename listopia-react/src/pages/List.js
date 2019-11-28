import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import RealEstate from '../components/RealEstate';
import getItemsByCategory from '../selectors';
import { setCategory } from '../actions';

const Index = ({ realEstates, setCategory }) => {
  const { category } = useParams();
  setCategory(category);

  return (
    <div>
      <h1>{category}</h1>
      {realEstates.map((realEstate) => (
        <RealEstate key={realEstate.id} realEstate={realEstate} />
      ))}
    </div>
  );
};

Index.propTypes = {
  setCategory: PropTypes.func.isRequired,
  realEstates: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  realEstates: getItemsByCategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Index);
