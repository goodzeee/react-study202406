import React from 'react';
import './CourseList.css';
import CourseItem from './CourseItem';

const CourseList = ({ items , onDelete }) => {

  const goalsText = items.map(({id, text}) => (
    <CourseItem
    key={id}
    id = {Math.random().toString()}
    text= {text}
    />
  ));

  return (
    <ul className='goal-list'>
      {
        items.map(item => <CourseItem key={item.id} item={item} onDelete={onDelete}/>)
      }
    </ul>
  );
};

export default CourseList;
