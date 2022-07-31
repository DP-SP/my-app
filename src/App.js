//import './App.css';
//import react , { Component}  from 'react';
import Category from './components/Category';
//import Test from './components/Test';
import React from 'react';
//import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function App() {
  const n=5;
  return(){
    <>
    <h1 >MY APPLICATION</h1>
//<Test/>
 
    for(let i=0;i<n;i++)
    [...Array(n)].map((e, i) =>
     <Category title="i am" key={i}/>)
  );

}
