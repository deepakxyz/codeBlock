
function getLocation(){

    if ('geolocation' in navigator){
        navigator.geolocation.getCurrentPosition(pos=> {
            const lat = pos.coords.latitude;
            document.getElementById('lat').innerText = lat;
            const long = pos.coords.longitude;
            document.getElementById('long').innerText = long;
            const name = document.getElementById('name').value;

            // clinet
            const data = {lat, long, name};
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            };
            // post the data
            
            // using promies
            // fetch('/api', options).then(response =>{
            //     // console.log(response);
            //     return response;
            // }).then(data_json => {
            //     console.log(data_json.json())
            // })

            // asyn  / await
            async function postData(){
                const response = await fetch('/api', options);
                const data = await response.json();
                console.log(data);
            }

            postData();

        });
    } else {
        console.log('Geo location not available.');
    }
}