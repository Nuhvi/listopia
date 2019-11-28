import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import RealEstate from '../components/RealEstate';


const Index = ({ realEstates }) => (
  <div>
    {realEstates.map((realEstate) => (
      <RealEstate
        key={realEstate.id}
        realEstate={realEstate}
      />
    ))}
  </div>
);

Index.propTypes = {
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
  realEstates: state.realEstates,
});

export default connect(mapStateToProps)(Index);
