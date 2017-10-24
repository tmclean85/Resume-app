import React from 'react';
import { connect } from 'react-redux';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import { pushLanguage } from '../../redux/modules/filterController';
import { loadRepos } from '../../redux/modules/repoData';

import './styles.css';

const FilterList = ({ filterData, dispatch, repoData }) => {

  const langs = repoData.map((data) => {
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
      onChange={(event, index, value) => dispatch(pushLanguage(value))}
    >
      {uniqueLangs.map((tag) => (
        <MenuItem
          key={tag}
          insetChildren={true}
          value={tag}
          primaryText={tag}
          checked={filterData && filterData.includes(tag)}
        />
      ))}
      <MenuItem
        insetChildren={true}
        primaryText="Clear Filter"
        onClick={() => dispatch(pushLanguage([]))}
      />
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
