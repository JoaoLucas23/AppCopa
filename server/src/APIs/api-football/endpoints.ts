import axios from 'axios';
import http from 'http';


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

