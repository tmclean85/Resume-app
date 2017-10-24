import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { handleFilter, pushProjects } from '../../redux/modules/filterController';

import './styles.css';

const FilterList = ({ filterData, dispatch, repoData }) => {

  const langs = repoData.map((data) => {
    return data.language;
  });

  const uniqueLangs = langs.filter((item, pos) => {
    return langs.indexOf(item) === pos;
  });

  const filterItems = (query) => {
    return repoData.filter((el) => {
      console.log(el.language === query);
      return el.language === query;
    });
  };

  return (
    <SelectField
      multiple={true}
      hintText="Filter by Primary Language"
      value={this.uniqueLangs}
      onChange={(event, index, value) => dispatch(pushProjects(filterItems(value)))}
    >
      {uniqueLangs.map((tag) => (
        <MenuItem
          key={tag}
          insetChildren={true}
          value={tag}
          primaryText={tag}
        />
      ))}
    </SelectField>
  );
};

const mapStateToProps = (state) => {
  return {
    filterData: state.filter.data,
    repoData: state.repo.data,
  };
};

export default connect(mapStateToProps)(FilterList);
