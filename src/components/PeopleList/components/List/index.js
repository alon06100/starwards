import React from 'react';
import { Link } from 'react-router-dom';


const getGender = (gender) => {
  if (gender === 'male' || gender === 'female') {
    return gender;
  }
  else {
    return 'question';
  }
};
const List = ({ peopleList }) => (
  peopleList.map(people => (
    <div key={people.url} className="people">
      <div className="circle"><i className={`fas fa-${getGender(people.gender)}`}></i></div>
      <Link to={`${people.url.replace('https://swapi.co/api', '')}`}>
        <div className="people-name-wrapper">{people.name}</div>
      </Link>
    </div>
  ))
)

export default List;
