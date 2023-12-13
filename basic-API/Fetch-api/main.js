const apiurl = "http://localhost:3000/api-user"
fetch(apiurl).then(res => res.json().then(data => {
    console.log(data)
}))