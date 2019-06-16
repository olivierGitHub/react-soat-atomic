import React from 'react';
import TheInput from '../../atoms/input/TheInput';
import TheButton from '../../atoms/button/TheButton';

function Search(props) {
  return (
      <form className="form-inline">
        <TheInput className="form-control" type="text" placeholder="rechercher" />
        <TheButton buttonText="Recherche" />
      </form>
    )
}

export default Search;
