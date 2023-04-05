// import { Component } from 'react';
import { useState } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';

const Searchbar =({getQuery})=> {
  // state = {
  //   queryWord: '',
  // };
  const [queryWord,setQueryWord] = useState('');

  const handlerSubmit = (ev) => {
    ev.preventDefault();
    queryWord && getQuery(queryWord);
  }

  
    return (
      <>
        <header className={s.Searchbar}>
          <form
            className={s.SearchForm}
            onSubmit={ev => handlerSubmit(ev)}
          >
            <button type="submit" className={s.SearchFormButton}>
              <span className={s.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={s.SearchFormInput}
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={queryWord}
              onChange={ev => setQueryWord(ev.target.value)}
            />
          </form>
        </header>
      </>
    );
  
}

Searchbar.propTypes={
  getQuery:PropTypes.func,
}

export default Searchbar;
