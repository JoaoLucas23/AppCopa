import axios from 'axios';
import http from 'http';

const API_KEY = '7c4295ac7bmshf12794f57a5b80dp1bf46cjsn51141da1b9b7';
const API_TOKEN = '26354138ccb14cde89d2ec96b801c233';

const TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MzZkMGJlYTZjYWNjMDZmNDhmOGE4ZDQiLCJpYXQiOjE2NjgwOTA4NTksImV4cCI6MTY2ODE3NzI1OX0.nsuo5gEBvA_64wEGpL_lnWFxs12Mptm9xVdl5YJt6rQ";

export const getPlayers = async () => {

    http.request({
        host: 'api.cup2022.ir',
        path: '/api/v1/user',
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        
    }, (res) => {
        console.log(res);
    }
    );

    // await axios.post('https://api.cup2022.ir/api/v1/user', {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     },
    //     data: {
    //         "name" : "Joao Lucas",
    //         "email": "jllgoncalves23@gmail.com",
    //         "password": "jojoka07",
    //         "passwordConfirm" : "jojoka07",
    //     },
    // }).then((res) => {
    //     console.log(res);
    // }
    // ).catch((err) => {
    //     console.log(err);
    // }
    // );

}

