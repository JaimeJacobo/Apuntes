


$('#all-countries-button').click(function(){
        axios.get('https://restcountries.eu/rest/v2/all')
    .then((response)=>{

        
        console.log(response.data[0])
        
        $("#list").html('<ul></ul>')

        response.data.forEach((country)=>{
            $("#list").append('<li>' + country.name + '</li>');
        });

    })
    .catch((err)=>{
        console.log(err)
    })
});

$("#goButton").click(()=>{
    $("#list").html('');
    let chosenCountry = $("#countryInput").val();
    console.log(chosenCountry)
    
    axios.get('https://restcountries.eu/rest/v2/name/' + chosenCountry )
    .then((response)=>{

        console.log(response.data[0].flag)
        
        $("#list").html('<ul></ul>')

        response.data.forEach((country)=>{
            $("#list").append('<li><strong>Country name</strong>: ' + country.name + '</li>');
            $("#list").append('<li><strong>Country Capital</strong>: ' + country.capital + '</li>');
            $("#list").append('<li><strong>Country main currency</strong>: ' + country.currencies[0].name + '</li>');
            $("#list").append('<li><strong>Country main language</strong>: ' + country.languages[0].name + '</li>');
            $("#list").append("<li><strong>Flag</strong>: <img src="+ country.flag + "></li>");
        });

    })
    .catch((err)=>{
        console.log(err)
    })



});

$("#removeButton").click(()=>{
    $("#list").html('');
});

$("#secondGoButton").click(()=>{
    $("#list").html('');
    let chosenCapital = $("#capitalInput").val();
    // console.log(chosenCountry)
    
    axios.get('https://restcountries.eu/rest/v2/capital/' + chosenCapital)
    .then((response)=>{

        console.log(response.data[0].flag)
        
        $("#list").html('<ul></ul>')

        response.data.forEach((country)=>{
            $("#list").append('<li><strong>Country name</strong>: ' + country.name + '</li>');
            $("#list").append('<li><strong>Country Capital</strong>: ' + country.capital + '</li>');
            $("#list").append('<li><strong>Country main currency</strong>: ' + country.currencies[0].name + '</li>');
            $("#list").append('<li><strong>Country main language</strong>: ' + country.languages[0].name + '</li>');
            $("#list").append("<li><strong>Flag</strong>: <img src="+ country.flag + "></li>");
        });

    })
    .catch((err)=>{
        console.log(err)
    })



});