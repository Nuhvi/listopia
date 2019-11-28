import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

const Item = ({ items }) => {
  const { id } = useParams();
  const item = items.find((item) => item.id === Number(id));

  return (
    <article>
      <p>
        <span>ID: </span>
        {item.id}
      </p>
      <p>
        <span>Price: </span>
        {item.price}
      </p>
      <p>
        <span>Desc: </span>
        {item.desc}
      </p>
      <p>
        <span>Catg: </span>
        {item.category}
      </p>
    </article>
  );
};

Item.propTypes = {
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
  items: state.items,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Item);
