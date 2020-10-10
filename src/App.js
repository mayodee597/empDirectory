import React, { useEffect, useState } from 'react';
import EmployeeTable from "./components/employeetable";
import Search from "./components/search";
import {getemployees} from "./randomuserapi";
//import logo from './logo.svg';
import './App.css';

function App() {
  const [listemployees, updatelistemployees]= useState([]);
  const [employeestoRender, updateemployeestoRender]= useState([]);
  useEffect(function(){
    getemployees().then(function({data:{results}}){
      updatelistemployees(results);
    });
  },[]);
  return (
    <div className="App">
      <h1>Employee Directory</h1>
      Search by last name: 
      <Search employees={listemployees} updateemployees= {updateemployeestoRender} />
      <br />
      <EmployeeTable employees={employeestoRender} />
    </div>
  );
}

export default App;
