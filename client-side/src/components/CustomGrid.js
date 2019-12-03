import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { useTheme } from '@material-ui/core';

const Grid = styled.div`
  display: grid;
  grid-template-columns: ${(props) => `repeat(${props.columns}, 1fr)`};
  grid-gap: ${(props) => props.gap};
  margin: ${(props) => props.gap};
`;

const CustomGrid = ({
  children, columns, gap, margin,
}) => {
  const theme = useTheme();
  return (
    <Grid
      columns={columns}
      gap={gap || theme.spacing(1)}
      margin={margin || theme.spacing(1)}
    >
      {children}
    </Grid>
  );
};

CustomGrid.propTypes = {
  children: PropTypes.element.isRequired,
  columns: PropTypes.element,
  gap: PropTypes.string,
  margin: PropTypes.string,
};

CustomGrid.defaultProps = {
  columns: '1',
  gap: '',
  margin: '',
};

export default CustomGrid;
