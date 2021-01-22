// let url = "https://api.stackexchange.com/docs/info#filter=default&site=stackoverflow"
let url = ('https://reqres.in/api/users')

fetch(url)
.then(res => {
    return res.json()
})
.then(data => {
    console.log(data)
})