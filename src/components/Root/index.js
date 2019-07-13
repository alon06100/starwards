import React from 'react';
import PeopleList from '../PeopleList';
import PeopleItem from '../PeopleItem';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Root = () => (
  <Router>
    <Route exact path='/' component={PeopleList} />
    <Route path='/people/:id' component={PeopleItem} />
  </Router>
)

export default Root;