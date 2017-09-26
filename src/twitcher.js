import React, { Component } from 'react';
import './channels.css';
import fetchChannels from "./api";
import axios from 'axios';
import fcc from "./channels";

// const CLIENT_ID = 'a0417r3fvva8hs0ksfm34qv2so1j0q';
// const BASE_URL = 'https://api.twitch.tv/kraken/';


const AddChannel = (channel) => {
    var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/' + channel + '?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
    axios.get(encodedURI)
        .then(response => {
            this.setState({
                channel1: [
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

class Twitcher extends Component {
    constructor(props) {
        super(props);
        this.stateSetter = this.stateSetter.bind(this);
        this.state = { //can be a function if we wanted
            channels: ["ESL_SC2", "KindaFunny", "freecodecamp", "noobs2ninjas", "MrMoonsHouse", "Shroud", "H3H3", "JoshOG", "Summit1G"],
            fcc: "",
            H3H3: "",
            JoshOG: "",
            Shroud: "",
            MrMoonsHouse: "",
            noobs2ninjas: "",
            ESL_SC2: "",
            Summit1G: "",
        };
    }


    stateSetter(response) {
        this.setState({
            channel: [<div>{response.data.display_name}</div>, response.data.status],
            channelStatus: response.data.status,
            channelGame: response.data.game,
            channelLogo: response.data.logo
        });
    }

    // so far this seems to be a good model... only problem is I need to do it for every single channel
    fcc() {
        var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/streams/freecodecamp?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
        axios.get(encodedURI)
            .then((response) => {
                if (response.data.stream) {
                    this.setState({
                        fcc: [
                            <div className="fcc">
                                <span><img src={response.data.stream.channel.logo} /></span>
                                <div><a target="_blank" href="https://www.twitch.tv/freecodecamp">Name: {response.data.stream.channel.display_name}</a></div>
                                <div>Game: {response.data.stream.game}</div>
                                <div>Status: {response.data.stream.channel.status}</div>
                            </div>
                        ]
                    })
                } else {
                    this.setState({
                        fcc: [
                            <div className="fcc">
                                <div><a target="_blank" href="https://www.twitch.tv/freecodecamp">FreeCodeCamp</a></div>
                                <div>Offline</div>
                            </div>
                        ]
                    })
                }
            })
    }


    ESL_SC2() {
        var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/streams/ESL_SC2?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
        axios.get(encodedURI)
            .then(response => {
                if (response.data.stream) {
                    this.setState({
                        ESL_SC2: [
                            <div className="fcc">
                                <span><img src={response.data.stream.channel.logo} /></span>
                                <div><a target="_blank" href="https://www.twitch.tv/ESL_SC2">Name: {response.data.stream.channel.display_name}</a></div>
                                <div>Game: {response.data.stream.game}</div>
                                <div>Status: {response.data.stream.channel.status}</div>
                            </div>
                        ]
                    })
                } else {
                    this.setState({
                        ESL_SC2: [
                            <div className="fcc">
                                <div><a target="_blank" href="https://www.twitch.tv/ESL_SC2">ESL_SC2</a></div>
                                <div>Offline</div>
                            </div>
                        ]
                    })
                }
            })
    }

    noobs2ninjas() {
        var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/streams/noobs2ninjas?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
        axios.get(encodedURI)
            .then(response => {
                if (response.data.stream) {
                    this.setState({
                        noobs2ninjas: [
                            <div className="fcc">
                                <div><img src={response.data.stream.channel.logo} /></div>
                                <div><a target="_blank" href="https://www.twitch.tv/noobs2ninjas">{response.data.stream.channel.display_name}</a></div>
                                <div>{response.data.stream.game}</div>
                                <div>{response.data.stream.channel.status}</div>
                            </div>
                        ]
                    })
                } else {
                    this.setState({
                        noobs2ninjas: [
                            <div className="fcc">
                                <div><a target="_blank" href="https://www.twitch.tv/noobs2ninjas">noobs2ninjas</a></div>
                                <div>Offline</div>
                            </div>
                        ]
                    })
                }
            });
    }

    MrMoonsHouse() {
        var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/streams/mrmoonshouse?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
        axios.get(encodedURI)
            .then(response => {
                if (response.data.stream) {
                    this.setState({
                        MrMoonsHouse: [
                            <div className="fcc">
                                <span><img src={response.data.stream.channel.logo} /></span>
                                <div><a target="_blank" href="https://www.twitch.tv/mrmoonshouse">Name: {response.data.stream.channel.display_name}</a></div>
                                <div>Game: {response.data.stream.game}</div>
                                <div>Status: {response.data.stream.channel.status}</div>
                            </div>
                        ]
                    })
                } else {
                    this.setState({
                        MrMoonsHouse: [
                            <div className="fcc">
                                <div><a target="_blank" href="https://www.twitch.tv/mrmoonshouse">MrMoonsHouse</a></div>
                                <div>Offline</div>
                            </div>
                        ]
                    })
                }
            });
    }

    Shroud() {
        var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/streams/shroud?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
        axios.get(encodedURI)
            .then(response => {
                if (response.data.stream) {
                    this.setState({
                        Shroud: [
                            <div className="fcc">
                                <span><img src={response.data.stream.channel.logo} /></span>
                                <div><a target="_blank" href="https://www.twitch.tv/shroud">Name: {response.data.stream.channel.display_name}</a></div>
                                <div>Game: {response.data.stream.game}</div>
                                <div>Status: {response.data.stream.channel.status}</div>
                            </div>
                        ]
                    })
                } else {
                    this.setState({
                        Shroud: [
                            <div className="fcc">
                                <div><a target="_blank" href="https://www.twitch.tv/shroud">Shroud</a></div>
                                <div>Offline</div>
                            </div>
                        ]
                    })
                }
            });
    }

    JoshOG() {
        var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/streams/JoshOG?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
        axios.get(encodedURI)
            .then(response => {
                if (response.data.stream) {
                    this.setState({
                        JoshOG: [
                            <div className="fcc">
                                <span><img src={response.data.stream.channel.logo} /></span>
                                <div><a target="_blank" href="https://www.twitch.tv/JoshOG">Name: {response.data.stream.channel.display_name}</a></div>
                                <div>Game: {response.data.stream.game}</div>
                                <div>Status: {response.data.stream.channel.status}</div>
                            </div>
                        ]
                    })
                } else {
                    this.setState({
                        JoshOG: [
                            <div className="fcc">
                                <div><a target="_blank" href="https://www.twitch.tv/JoshOG">JoshOG</a></div>
                                <div>Offline</div>
                            </div>
                        ]
                    })
                }
            });
    }

    H3H3() {
        var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/streams/H3H3?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
        axios.get(encodedURI)
            .then(response => {
                if (response.data.stream) {
                    this.setState({
                        H3H3: [
                            <div className="fcc">
                                <span><img src={response.data.stream.channel.logo} /></span>
                                <div><a target="_blank" href="https://www.twitch.tv/H3H3">Name: {response.data.stream.channel.display_name}</a></div>
                                <div>Game: {response.data.stream.game}</div>
                                <div>Status: {response.data.stream.channel.status}</div>
                            </div>
                        ]
                    })
                } else {
                    this.setState({
                        H3H3: [
                            <div className="fcc">
                                <div><a target="_blank" href="https://www.twitch.tv/H3H3">H3H3</a></div>
                                <div>Offline</div>
                            </div>
                        ]
                    })
                }
            });
    }


    Summit1G() {
        var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/streams/Summit1G?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');
        axios.get(encodedURI)
            .then(response => {
                if (response.data.stream) {
                    this.setState({
                        Summit1G: [
                            <div className="fcc">
                                <span><img src={response.data.stream.channel.logo} /></span>
                                <div><a target="_blank" href="https://www.twitch.tv/Summit1G">Name: {response.data.stream.channel.display_name}</a></div>
                                <div>Game: {response.data.stream.game}</div>
                                <div>Status: {response.data.stream.channel.status}</div>
                            </div>
                        ]
                    })
                } else {
                    this.setState({
                        Summit1G: [
                            <div className="fcc">
                                <div><a target="_blank" href="https://www.twitch.tv/Summit1G">Summit1G</a></div>
                                <div>Offline</div>
                            </div>
                        ]
                    })
                }
            });
    }

    //function here for updating the state?



    componentDidMount() {

        var channels = ["ESL_SC2", "KindaFunny", "freecodecamp", "noobs2ninjas", "MrMoonsHouse", "Shroud", "H3H3", "JoshOG", "Summit1G"];
        // need to use axios.all for the concurrent requests 

        this.fcc();
        this.Summit1G();
        this.H3H3();
        this.JoshOG();
        this.Shroud();
        this.MrMoonsHouse();
        this.noobs2ninjas();
        this.ESL_SC2();
    }



    // handleChange() {
    //     // Update component state whenever the data source changes
    //     this.setState({
    //       cchannels: DataSource.getComments()
    //     });
    //   }


    render() {
        return (
            <div className='container'>
                <div className="twitchTitle">
                    <div> TWITCH VIEWER </div>
                    {/* <div className='search'>
                    <input className="searchbar" placeholder="Search for more users"></input>
                </div> */}
                </div>

                <div className="channelBlock">{this.state.fcc}</div>
                <div className="channelBlock">{this.state.H3H3}</div>
                <div className="channelBlock">{this.state.JoshOG}</div>
                <div className="channelBlock">{this.state.Shroud}</div>
                <div className="channelBlock">{this.state.MrMoonsHouse}</div>
                <div className="channelBlock">{this.state.noobs2ninjas}</div>
                <div className="channelBlock">{this.state.ESL_SC2}</div>
                <div className="channelBlock">{this.state.Summit1G}</div>
            </div>
        );//make sure you are rendering components... 
        // STATELESS FUNCTIONAL COMPONENTS for the channels might be the way to go!
    } // needs to be a single component above this instead of the multiple divs. The component will render for each item in the array

}

// {this.state.comments.map((comment) => (
//     <Comment comment={comment} key={comment.id} />
//   ))}

export default Twitcher;
