import React, { Component } from 'react';
// import './App.css';
// import getChannelInfo from './player';
import Axios from 'axios';

const CLIENT_ID = 'a0417r3fvva8hs0ksfm34qv2so1j0q';
const BASE_URL = 'https://api.twitch.tv/kraken/';
//watch react-router video for ideas on how to do axios call and render to dom
// the promise of axios and the twitchapi returns an object of JSON data, which you need to call then() on, 
// and have it do something. See if you can get it to return the data in a <p> tag or something within componentDidMount

// for all of the different players/channels, break the returned value (the <p> tags or html structure) function that calls axios into it's own stateless functional component,
// and then call axios.get() on the channel, with the returning function being the returned data you want, fitting
// into the html structure from the component you made earlier
// props.data.display_name (?)
// use the axios.all([]) method to call all the players at the same time https://github.com/mzabriskie/axios


//for getting the twitch api and returning the data into the html?
// function getUserData(player) {
//   return Axios.all([
//     getProfile(player),
//     getRepos(player)
//   ]).then(function (data) {
//     var profile = data[0];
//     var repo = data[1];

//     return {
//       profile: profile,
//       repos: repos
//     }
//   })
// }


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      player: [],
    };

    this.getChannelInfo = this.getChannelInfo.bind(this);
  }

  getChannelInfo() {
    return Axios.get(`${BASE_URL}channels/freecodecamp?client_id=${CLIENT_ID}&callback=`)
      .then(function (response) {
        return response.display_name;
      });
  }

  componentDidMount() {
    this.setState(function () {
      return {
        player: this.getChannelInfo,
      }
    })
  }

  render() {
    return (
      <div>
        Twitch.tv
        <p>{this.state}</p>
      </div>
    );
  }
}

export default App;
