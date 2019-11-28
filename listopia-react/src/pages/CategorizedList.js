import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Item from '../components/Item';
import getItemsByCategory from '../selectors';
import { setCategory } from '../actions';

const CategorizedList = ({ items, setCategory }) => {
  const { category } = useParams();
  setCategory(category);

  return (
    <div>
      <h1>{category}</h1>
      {items.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

CategorizedList.propTypes = {
  setCategory: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      price: PropTypes.number.isRequired,
      desc: PropTypes.string.isRequired,
      category: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

const mapStateToProps = (state) => ({
  items: getItemsByCategory(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCategory: (category) => dispatch(setCategory(category)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategorizedList);
