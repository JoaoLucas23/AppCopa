import axios from 'axios';

const base_url = 'https://apiv2.allsportsapi.com/football/'

export const getPlayers = async () => {

    axios.get(`https://apiv2.allsportsapi.com/football/?met=Players&APIkey=${process.env.ASA_TOKEN}`)
    .then(res => {
        console.log(res.data);
        return (res.data);
    }).catch(err => {
        console.log(err);
    } 
    );
}

