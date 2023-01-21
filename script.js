function getdata(){
    fetch('./res.json').then((response) => response.json()).then((data) => renderjson(data));
}
getdata()
function renderjson(data){
    const element=document.getElementById('jsonview')
    element.innerText=data
}