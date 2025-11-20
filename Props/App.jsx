import React, { useState, useEffect } from 'react';
import StudentRegistration from './StudentManagementApp/StudentRegistration';
import StudentList from './StudentManagementApp/StudentList';
import Profile from './StudentManagementApp/Profile';
import Task from './Task';
import OrderedList from './FunctionalComponent/OrderedList';
import UnorderedList from './FunctionalComponent/UnorderedList';
import Faculty from './Counter/Faculty';

    
  


const App = () => {
   const facultyData = {
facName: "Ramesh",
    subject: "Java",
    experience: "13 Years", 
};

  return (
    <div>

       <h1>Faculty Details</h1>
      <Faculty 
        facName={facultyData.facName}
        subject={facultyData.subject}
        experience={facultyData.experience}
      />
     
    </div>
  )
}

export default App
