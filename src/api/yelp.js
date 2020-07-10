import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer fuySpBJHr4YQQ8gGBEuyALFSoRcJf5uWjZwlgb8rFpZgEnHJvUtiBPzJU1Kp8tYat7zW7RRZI_6Bf4rvA3SFWrHBywG8KKFGeKah0oqsqUEhHeNgXXJ98CALL38HX3Yx'
    }
});

