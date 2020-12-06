let params= new URLSearchParams(location.search);
let keyword=params.get('keyword');
if(keyword!=null && keyword.length<1 && keyword!=" ") {
    alert("search keyword not be empty and space.")
}
if(keyword!=null && keyword.length>=1) {
    document.querySelector('.search-item').style.display="none";
    document.querySelector('.search-result').style.display="block";
    document.querySelector('.search-result h2 span').innerHTML=keyword;
    document.querySelector('.search-result').innerHTML+='<table ><thead><tr><th>Poster</th><th>Title</th><th>Rating</th><th>Language</th><th>Link</th></tr></thead><tbody></tbody></table>';
    for (let index = 0; index < movieList.length; index++) {
        const element = movieList[index];
        if(element.title.toLowerCase().includes(keyword.toLowerCase())) {
            document.querySelector('.search-result table tbody').innerHTML+='<tr><td><img src="'+element.image+'" alt="image"></td><td>'+element.title+'</td><td>'+element.imdb+'</td><td>'+element.language+'</td><td><a href="mdetail.html?id='+element.id+'">Watch Now</a></td></tr>';
        }
    }
}
function search() {
    let input=document.querySelector('#search');
    let keyword=input.value;
    location.href=location.pathname+'?keyword='+keyword;
}
document.querySelector('#search').addEventListener("keypress",function(event) {
    if(event.key=="Enter") {
        search();
    }
});
