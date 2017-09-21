import React from 'react';
import axios from 'axios';


const CLIENT_ID = 'a0417r3fvva8hs0ksfm34qv2so1j0q';
const BASE_URL = 'https://api.twitch.tv/kraken/';


function fetchChannels (channel) {
        var encodedURI = window.encodeURI('https://api.twitch.tv/kraken/channels/'+channel+'?client_id=a0417r3fvva8hs0ksfm34qv2so1j0q&callback=');

        return axios.get(encodedURI)
            .then(response => {
                return(
                    <div>
                    {response.data.display_name}
                    {response.data.game}
                    {response.data.logo}
                    </div>
                ) 
            })
        }

    export default fetchChannels;