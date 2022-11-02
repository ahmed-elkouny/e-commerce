function getTrendingMovies(){
    const http = new XMLHttpRequest();
    http.onload =  (data) => {
    // console.log(data.target.response);
    
    const res = JSON.parse(data.target.response)
    const movie = res.results
    let title = document.getElementsByClassName("view");
    let para = document.getElementsByClassName("para");
  
        // Use a regular for-loop
        for (let i = 0; i < movie.length; i++) {
            mov = res.results[i]
              title += "<h1>" + mov.title + "</h1>";
              para += "<h5>" + mov.release_date + "</h5>";
        }
        document.write(title, para)
    };
    http.open('GET','https://api.themoviedb.org/3/trending/movie/week?api_key=6581d8fdbb0a38a52512a17f158a2e3c')
    http.send();   
}

 

/*   


1-

function sum(){

}

function(){

}

(res) => {
    
}






*/