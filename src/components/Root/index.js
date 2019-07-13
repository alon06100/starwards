import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PeopleList from '../PeopleList';
import PeopleItem from '../PeopleItem';


const Root = () => (
  <Router>
    <Route exact path="/" component={PeopleList} />
    <Route path="/people/:id" component={PeopleItem} />
  </Router>
);

export default Root;
