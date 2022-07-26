

function postRequestApi(data_url) {
  console.log(data_url)
  Object.keys(data_url).forEach(key =>{
    const images = data_url[key].data_url
    const requestOptions = {
    method: "POST",
    headers: { 
        "Content-Type": "application/json",
        "credentials": "include",
     },
    body: JSON.stringify(images),
  }
  fetch("http://127.0.0.1:8000/dislex/api/v1/post-image/", requestOptions)
    .then(response => response.json())
    .then(data => this.setState({ postId: data.id }))
  })
  
}
export {postRequestApi}
