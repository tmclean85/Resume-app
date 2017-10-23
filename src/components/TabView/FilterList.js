import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { handleFilter } from '../../redux/modules/filterController';

import './styles.css';

const FilterList = ({ filterData, dispatch }) => {

  const langs = filterData.map((data) => {
    return data.language;
  });

  const uniqueLangs = langs.filter((item, pos) => {
    return langs.indexOf(item) === pos;
  });

  return (
    <SelectField
      multiple={true}
      hintText="Filter by Primary Language"
      value={this.uniqueLangs}
      onChange={(event, index, value) => dispatch(handleFilter(value))}
    >
      {uniqueLangs.map((tag) => (
        <MenuItem
          key={tag}
          insetChildren={true}
          value={tag}
          checked={filterData && filterData.includes(tag)}
          primaryText={tag}
        />
      ))}
    </SelectField>
  );
};

const mapStateToProps = (state) => {
  return {
    filterData: state.repo.data,
  };
};

export default connect(mapStateToProps)(FilterList);
