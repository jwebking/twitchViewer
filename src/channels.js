import React, { Component } from 'react';
import axios from 'axios';

var channels = ["ESL_SC2", "KindaFunny", "freecodecamp", "noobs2ninjas", "MrMoonsHouse", "Shroud", "H3H3", "JoshOG", "Summit1G"];


const fcc = () => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/freecodecamp?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            return (
                    <div className="fcc">
                        <div>{response.data.display_name}</div>
                        <div>{response.data.status}</div>
                        <div>{response.data.game}</div>
                        <div>{response.data.logo}</div>
                    </div>
            )
        });
}

const ESL_SC2 = () => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/ESL_SC2?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            this.setState({
                fcc: [
                    <div className="fcc">
                        <div>{response.data.display_name}</div>
                        <div>{response.data.status}</div>
                        <div>{response.data.game}</div>
                        <div>{response.data.logo}</div>
                    </div>
                ]
            })
        });
}

const KindaFunny = () => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/KindaFunny?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            this.setState({
                fcc: [
                    <div className="fcc">
                        <div>{response.data.display_name}</div>
                        <div>{response.data.status}</div>
                        <div>{response.data.game}</div>
                        <div>{response.data.logo}</div>
                    </div>
                ]
            })
        });
}

const noobs2ninjas = () => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/noobs2ninjas?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            this.setState({
                fcc: [
                    <div className="fcc">
                        <div>{response.data.display_name}</div>
                        <div>{response.data.status}</div>
                        <div>{response.data.game}</div>
                        <div>{response.data.logo}</div>
                    </div>
                ]
            })
        });
}

const MrMoonsHouse = () => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/mrmoonshouse?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            this.setState({
                fcc: [
                    <div className="fcc">
                        <div>{response.data.display_name}</div>
                        <div>{response.data.status}</div>
                        <div>{response.data.game}</div>
                        <div>{response.data.logo}</div>
                    </div>
                ]
            })
        });
}

const Shroud = () => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/shroud?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            this.setState({
                fcc: [
                    <div className="fcc">
                        <div>{response.data.display_name}</div>
                        <div>{response.data.status}</div>
                        <div>{response.data.game}</div>
                        <div>{response.data.logo}</div>
                    </div>
                ]
            })
        });
}

const JoshOG = () => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/JoshOG?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            this.setState({
                fcc: [
                    <div className="fcc">
                        <div>{response.data.display_name}</div>
                        <div>{response.data.status}</div>
                        <div>{response.data.game}</div>
                        <div>{response.data.logo}</div>
                    </div>
                ]
            })
        });
}

const H3H3 = () => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/H3H3?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            this.setState({
                fcc: [
                    <div className="fcc">
                        <div>{response.data.display_name}</div>
                        <div>{response.data.status}</div>
                        <div>{response.data.game}</div>
                        <div>{response.data.logo}</div>
                    </div>
                ]
            })
        });
}


const Summit1G = () => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/Summit1G?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            this.setState({
                fcc: [
                    <div className="fcc">
                        <div>{response.data.display_name}</div>
                        <div>{response.data.status}</div>
                        <div>{response.data.game}</div>
                        <div>{response.data.logo}</div>
                    </div>
                ]
            })
        });
}

//var channels = ["ESL_SC2", "KindaFunny", "freecodecamp", "noobs2ninjas", "MrMoonsHouse", "Shroud", "H3H3", "JoshOG", "Summit1G"];

// module.exports = {
//  FCC,
//  ESL_SC2,
//  KindaFunny,
//  noobs2ninjas,
//  MrMoonsHouse,
//  Shroud,
//  H3H3,
//  JoshOG,
//  Summit1G,
// }
export default fcc();