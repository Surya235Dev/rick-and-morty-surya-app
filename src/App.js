import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/episode-list/episode-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component{
  constructor(){
   super();

    this.state = {
      page1:[],
      allEpisode:[],
      searchEpisode:''
    }

  }

  componentDidMount(){
    fetch(`https://rickandmortyapi.com/api/episode?page=1`)
    .then(response=> response.json())
    .then(firstpage=>this.setState({page1: firstpage.results}))
    .then(fetch(`https://rickandmortyapi.com/api/episode?page=2`)
    .then(response=> response.json())
    .then(secondpage=>this.setState({allEpisode:this.state.page1.concat(secondpage.results)}))
    )
  }

  handleChange = (e) => {
    this.setState({searchEpisode: e.target.value})
  }

  render(){

    const { allEpisode, searchEpisode } = this.state;
    const filtedEpisode = allEpisode.filter(search => search.name.toLowerCase().includes(searchEpisode.toLowerCase()))
   
    return(
      //Note
      //This web app is responsive too.
      // Since I am new to React JS, I found this projct challenging. 
      // I tried to even display each episode thumbnails and list of leading character of each episode.But, it was only partially successful.So took it down.
      // Thank You.
    
      <div className = 'App'>
        
        <SearchBox 
          placeholder = 'Search By Episode Name'
          handleChange = {this.handleChange}
        />
        <div className="title">Rick and Morty</div>
        <CardList episodes={filtedEpisode}/>
       
      </div>
    
    )
  }
}

export default App;
