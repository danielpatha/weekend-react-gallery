import React from 'react';
import axios from 'axios';
import { useState, useEffect} from 'react';
import GalleryList from '../GalleryList/GalleryList'
import './App.css';


function App() {
  //This is where you declare your two states
let [photoList, setphotoList] = useState([]);

//On page load, this function will run and pass an empty array as an argument
useEffect(() => {
  getPhotos() 
}, [])

const getPhotos = () => {
  axios.get('/gallery')
  .then(response => {
    console.log('the response is', response.data)
    setphotoList(response.data)//This passes the response.data from the server to the setphotoList state.
  })
  .catch(error => {
    console.log('GET photoList failed', error);
  })
};

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Gallery of My Life</h1>
        </header>

        <main>
          {/* Passing one prop to GalleryList */}
        <GalleryList photoList = {photoList} getPhotos = {getPhotos}/>
        </main>
    

      </div>
    );
}

export default App;
