/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from '../common/Header';
import Loader from '../common/Loader';
import View from '../common/View';
import { withRouter } from 'react-router-dom';
import './index.scss';

const PeopleItem = (props) => {
  const [peopleItem, setPropleItem] = useState([]);
  const [isLoading, toggleIsLoading] = useState(true);

  useEffect(() => {
    const id = props.match.params.id;
    getPeopleItem(id);
  }, [])

  const getPeopleItem = (id) => {
    let url = `https://swapi.co/api/people/${id}/`;
    axios.get(url)
      .then((response) => {
        setPropleItem(response.data);
        toggleIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const PersonList = () => (
    Object.keys(peopleItem).map(itemKey => (
      <div key={itemKey}>
        <span className="person-key">{itemKey + ': '}</span>
        <span>{peopleItem[itemKey]}</span>
      </div>
    ))
  )

  return (
    <View>
      <Header
        text={peopleItem.name}
      />
      <div id="bottom-section-container">
        <div id="person-container">
          {isLoading ? <Loader /> : <PersonList />}
        </div>
      </div>
    </View>
  )
}

export default withRouter(PeopleItem);