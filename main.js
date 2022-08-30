//===========
// task
//=== fetch data from external api's and display the data

//==========
import fetch from "node-fetch";

fetch(
  "https://api.themoviedb.org/3/movie/550?api_key=e114471be89ade1072a1ab62bfbafbc4"
)
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
    console.log("=====================================");
    console.log("original title:", data.original_title);
    console.log("=====================================");
    console.log("overview:", data.overview);
  });
