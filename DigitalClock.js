

setInterval(() => {

    let now = new Date();

    let month = now.getMonth() + 1;

    console.log(now.getHours() + ' : ' + now.getMinutes() + " : " + now.getSeconds());

    console.log(now.getDate() + ' : ' + month + " : " + now.getFullYear())
}, 1000)
