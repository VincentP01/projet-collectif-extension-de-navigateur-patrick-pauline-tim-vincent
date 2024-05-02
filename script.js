const picture=document.querySelector('.dailyImage')


let allPictureinfos = [];

fetch(`https://api.nasa.gov/planetary/apod?api_key=TqSURpcMofzalKghSjAneOnZRJq5zN7MS4FuJdj3&count=1
`)
.then((res)=>res.json())
    .then((data)=>{allPictureinfos=data;
        console.log(data)
        console.log(typeof allPictureinfos)
        console.log(data[0].url)
        console.log(data[0].title)
        console.log(data[0].date)
        console.log(data[0].explanation)


        picture.src=data[0].url 
     })