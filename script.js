const picture=document.querySelector('.dailyImage')
const title = document.querySelector('.title')
const date = document.querySelector('.date')
const explanation = document.querySelector('.explanation')


let allPictureinfos = [];

fetch(`https://api.nasa.gov/planetary/apod?api_key=TqSURpcMofzalKghSjAneOnZRJq5zN7MS4FuJdj3&count=1
&hd=true`)
.then((res)=>res.json())
    .then((data)=>{allPictureinfos=data;
        console.log(data)
        console.log(typeof allPictureinfos)
        console.log(data[0].url)
        console.log(data[0].title)
        console.log(data[0].date)
        console.log(data[0].explanation)


        picture.src=data[0].hdurl 
        title.innerHTML=`${data[0].title}`
        date.innerHTML=`${data[0].date}`
        explanation.innerHTML=`${data[0].explanation}`
         })