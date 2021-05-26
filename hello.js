const axios = require('axios');

const testAxios = async() => {
    await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => console.log(data.data[0]));
};

testAxios();

// Redo because sometimes you just YOLO on these pull requests so that
