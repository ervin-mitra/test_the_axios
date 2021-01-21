const axios = require('axios');

const testAxi = async() => {
    await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => console.log(data.data[0]));
};

testAxi();

