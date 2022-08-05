const axios=require('axios')

axios.get("https://www.facebook.com").then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});