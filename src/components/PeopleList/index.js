/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import Header from '../common/Header';
import View from '../common/View';
import Loader from '../common/Loader';
import List from './components/List';
import InfiniteScroll from 'react-infinite-scroll-component';
import { debounce } from 'lodash';
import './index.scss';
import SearchInput from '../common/SearchInput';

const PeopleList = () => {
  const [peopleList, setPeopleList] = useState([]);
  const [search, setPersonSearch] = useState('');
  const [page, setPage] = useState(1);
  const [hasMoreItems, toggleHasMoreItems] = useState(true);
  const debounceSearch = useCallback(debounce((value) => { getPeopleList(value); }, 500), []);

  useEffect(() => {
    getPeopleList();
  }, [])

  const filterUserChange = (e) => {
    setPeopleList([]);
    setPage(1);
    setPersonSearch(e.target.value);
    debounceSearch(e.target.value);
    toggleHasMoreItems(true);
  };

  const getPeopleList = (search = '') => {
    axios.get(`https://swapi.co/api/people/?page=${page}&search=${search}`)
      .then((response) => {
        const list = [...peopleList].concat(response.data.results);
        setPeopleList(list);
        setPage(page + 1);
        if (!response.data.next) {
          toggleHasMoreItems(false);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <View>
      <Header text="STARTWARS" />
      <div id="bottom-section-container">
        <div id="list-page-search">
          <SearchInput
            filter={search}
            handleChange={filterUserChange}
            placeholder="Search for people..." />
        </div>
        <div id="people-list-container">
          <InfiniteScroll
            scrollableTarget="people-list-container"
            dataLength={peopleList.length}
            next={getPeopleList.bind(null, search)}
            loader={<Loader />}
            hasMore={hasMoreItems}>
            <List peopleList={peopleList} />
          </InfiniteScroll>
        </div>
      </div>
    </View>
  )
}

export default PeopleList;