async function searchVideos() {
  const cardContainer = document.querySelector("#c-container");
  cardContainer.innerHTML = "";
  const prompt = document.querySelector("#search").value;
  const url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${prompt}&key=AIzaSyBSrggWmLFyVfbTbxDPxO5QHZ_Jl0C67qE`;

  try {
    const response = await fetch(url);
    const result = await response.json();
    result.items.forEach((video) => {
      console.log(video.id.videoId);
      cardContainer.innerHTML += `<div class="card">
        <img src=${video.snippet.thumbnails.high.url} alt="">
         <a> <h3 onclick = "viewVideo('${video.id.videoId}')">${video.snippet.title}</h3></a>
        </div>`;
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}
function viewVideo(video) {
  const cardContainer = document.querySelector("#c-container");
  console.log(video)
  cardContainer.innerHTML = "";
  const videoContainer = document.querySelector("#v-container");
  videoContainer.innerHTML = `<iframe width="640" height="360" src="https://www.youtube.com/embed/${video}" title='' frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>`;
}
