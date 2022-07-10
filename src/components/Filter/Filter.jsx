import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { FilterLabel, FilterInput } from './Filter.styled';

class Filter extends Component {
  static propTypes = {
    filter: PropTypes.string,
    onFilter: PropTypes.func,
  };
  render() {
    const { filter, onFilter } = this.props;
    return (
      <FilterLabel>
        Find contacts by name
        <FilterInput type="text" value={filter.value} onChange={onFilter} />
      </FilterLabel>
    );
  }
}
export default Filter;
