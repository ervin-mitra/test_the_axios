const axios = require('axios');

const testAxios = async() => {
    await axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(data => console.log(data.data[0]));
};

testAxios();

// Green green green green green green green green green green green green green green green green green green green green green green green green green
// Box box box box box box box box box box box box box box box box box box box box box box box box box box box box box box box box
// Jaded jaded jaded jaded jaded jaded jaded jaded jaded jaded jaded jaded
