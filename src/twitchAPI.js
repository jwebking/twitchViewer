// things to get from Twitch API
// status (needs a catch for when it is null), display_name, game, logo, url
import React, { Component } from 'react';
import axios from 'axios';

const CLIENT_ID = 'a0417r3fvva8hs0ksfm34qv2so1j0q';
const BASE_URL = 'https://api.twitch.tv/kraken/';

export function tester(n){
    return <p>TESTER</p>;
}


export function getChannelInfo(name) {
    const CLIENT_ID = 'a0417r3fvva8hs0ksfm34qv2so1j0q';
    const BASE_URL = 'https://api.twitch.tv/kraken/';
    var encodedURI = window.encodeURI(`${BASE_URL}channels/${name}?client_id=${CLIENT_ID}&callback=`);
    return axios.get(encodedURI).then(function(res){
        return <p>res.data.display_name</p>
    })
}

export function getStreamInfo(name) {
    return axios.get(`${BASE_URL}streams/${name}?client_id=${CLIENT_ID}&callback=`)
}


export function searchChannel(channel) {
    return axios.get(`${BASE_URL}channels/${channel}?client_id=${CLIENT_ID}&callback=`)
}

export function saveToStorage(data) {
    localStorage.setItem('channels', JSON.stringify(data));
}

export function getFromStorage(data) {
    return JSON.parse(localStorage.getItem(data))
}



export function UpdateInfo(name) {
    return new Promise((resolve) => {

        let channelInfo = {
            name: name,
            display_name: name,
            game: "",
            id: null,
            message: undefined,
            online: undefined,
            stream: undefined,
            logo: "",

        };

        getChannelInfo(name).then((res) => {

            if (res.data.error) {
                channelInfo = {
                    ...channelInfo,
                    message: res.data.message,
                }

                resolve(channelInfo);

            } else {
                channelInfo = {
                    ...channelInfo,
                    name: res.data.name,
                    display_name: res.data.display_name,
                    game: res.data.game,
                    id: res.data._id,
                    stream: 'offline',
                    logo: res.data.logo,
                }

                getStreamInfo(name).then((res) => {
                    if (res.data.stream) {
                        channelInfo = {
                            ...channelInfo,
                            stream: res.data.stream.status,
                        }
                    }
                    resolve(channelInfo);
                })
            }

        })

    });
}
