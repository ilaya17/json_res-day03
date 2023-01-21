function getdata(){
    fetch('./res.json').then((response) => response.json()).then((data) => console.log(data));
}
getdata()
