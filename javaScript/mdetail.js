//genre and language must we in small letter.release field has year only and release and imdb must be numbers
let dummy_movie={
    title:'unknown',
    description:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto veritatis reprehenderit voluptate, alias at. Consequatur dolore voluptate asperiores porro repellendus impedit nisi officiis fugit velit! Laborum, nemo cupiditate aperiam molestiae temporibus exercitationem doloribus esse provident vitae officiis necessitatibus molestias illo porro nobis commodi recusandae quisquam eaque voluptas eligendi. Culpa eligendi veritatis similique nihil. Eveniet libero facilis pariatur cupiditate soluta, sed iste dignissimos quisquam ipsam magni officiis possimus repudiandae blanditiis? Quas aliquid excepturi ad numquam eligendi est aut velit reprehenderit veritatis autem, praesentium reiciendis laboriosam odio ratione quam officiis necessitatibus neque temporibus dolorum quidem laudantium, quae rerum? Expedita, officia quidem!',
    actor:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae iusto veritatis reprehenderit voluptate, alias at',
    genre:["all"],
    director:"none",
    language:'any',
    release:"none",
    imdb:0,
    quality:'hd',
    duration:'0 min',
    image:'#',
    link:'https://www.youtube.com/watch?v=0cj71zkW-88',
};

let params= new URLSearchParams(location.search);
movieList.forEach(element => {
    if(element.id==params.get('id')) {
        dummy_movie.id=element.id;
        dummy_movie.title=element.title;
        dummy_movie.description=element.description
        dummy_movie.image=element.image;
        // dummy_movie.actor=element.actor
        dummy_movie.genre=element.genre;
        dummy_movie.director=element.director;
        dummy_movie.language=element.language;
        dummy_movie.release=element.release;
        dummy_movie.imdb=element.imdb;
        dummy_movie.quality=element.quality;
        dummy_movie.duration=element.duration;
        dummy_movie.link=element.link;
    }
});

document.querySelector('main .image img').src=dummy_movie.image;
document.querySelector('main .description h2').innerHTML=dummy_movie.title;
document.querySelector('main .description p').innerHTML=dummy_movie.description;
document.querySelector('main .bottom .genre span').innerHTML=dummy_movie.genre;
document.querySelector('main .bottom .actor span').innerHTML=dummy_movie.actor;
document.querySelector('main .bottom .imdb span').innerHTML=dummy_movie.imdb;
document.querySelector('main .bottom .lang span').innerHTML=dummy_movie.language;
document.querySelector('main .bottom .release span').innerHTML=dummy_movie.release;
document.querySelector('main .bottom .director span').innerHTML=dummy_movie.director;
document.querySelector('main .bottom .quality span').innerHTML=dummy_movie.quality;
document.querySelector('main .bottom .duration span').innerHTML=dummy_movie.duration;
document.querySelector('main .detail .watch-btn').href=dummy_movie.link;

let requiredList=[]
let limit=7;
if(screen.width<321) {
    limit=4;
}
else if(screen.width<481) {
    limit=4;
}
else if(screen.width<729) {
    limit=6;
}
else if(screen.width<1025) {
    limit=8;
}
else if(screen.width<1201) {
    limit=6;
 }
for (let index = 0; index < movieList.length; index++) {
    let element = movieList[index];
    for (let ind = 0; ind < element.genre.length; ind++) {
        const ele = element.genre[ind];
        if (dummy_movie.genre.includes(ele) && dummy_movie.id!=element.id) {
            requiredList.push(element);
            break;
        }
    }
    if(requiredList.length>=limit) {
        break;
    }
}
requiredList.forEach(element => {
    document.querySelector('main .related-post .posts').innerHTML+='<div class="post"><a href="mdetail.html?id='+element.id+'"><img src="'+element.image+'" alt=""></a></div>';
});
