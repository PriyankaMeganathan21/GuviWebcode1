async function getNationalityData(){
    try {
    var personName = document.getElementById('personName').value;
    let nationalityDetails = await fetch (`https://api.nationalize.io?name=${personName}`)
    let res = await nationalityDetails.json()
    console.log(res);
    let regionName0 = new Intl.DisplayNames(['en'], {type: 'region'})
    let countryName0=regionName0.of(res.country[0].country_id)
    console.log(countryName0)
    let regionName1 = new Intl.DisplayNames(['en'], {type: 'region'})
    let countryName1=regionName1.of(res.country[1].country_id)
    console.log(countryName1)

    var dataCard = document.getElementById('dataCard');
    dataCard.innerHTML=` <div class="card" style="width:33rem" align="centre" >
    <div class="card-body">
      <h5 class="card-title">Nationality based on Name</h5>
      <hr>
      <p class="card-text">Name <b> ${personName} </b> in country ${countryName0} has a probability of ${res.country[0].probability} </p>
      <p class="card-text">Name <b> ${personName} </b> in country ${countryName1} has a probability of ${res.country[1].probability} </p>
    </div>
    </div>`
}
catch (error) {
  Message.innerHTML= "Input is" +error;
}
} 