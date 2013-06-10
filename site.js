(function ($) {

$(document).ready(function() {
//Load state price json
    var data = [
    {
        "state": "US Average",
        "stateabbrev": "US",
        "electric_raw": "11.59",
        "eproxy": "1.14"
    },
    {
        "state": "Alabama",
        "stateabbrev": "AL",
        "electric_raw": "10.97",
        "eproxy": "1.08"
    },
    {
        "state": "Alaska",
        "stateabbrev": "AK",
        "electric_raw": "17.72",
        "eproxy": "1.75"
    },
    {
        "state": "Arizona",
        "stateabbrev": "AZ",
        "electric_raw": "10.87",
        "eproxy": "1.07"
    },
    {
        "state": "Arkansas",
        "stateabbrev": "AR",
        "electric_raw": "9.07",
        "eproxy": "0.90"
    },
    {
        "state": "California",
        "stateabbrev": "CA",
        "electric_raw": "15.34",
        "eproxy": "1.51"
    },
    {
        "state": "Colorado",
        "stateabbrev": "CO",
        "electric_raw": "11.37",
        "eproxy": "1.12"
    },
    {
        "state": "Connecticut",
        "stateabbrev": "CT",
        "electric_raw": "17.22",
        "eproxy": "1.70"
    },
    {
        "state": "Delaware",
        "stateabbrev": "DE",
        "electric_raw": "13.02",
        "eproxy": "1.29"
    },
    {
        "state": "District of Columbia",
        "stateabbrev": "DC",
        "electric_raw": "12.14",
        "eproxy": "1.20"
    },
    {
        "state": "Florida",
        "stateabbrev": "FL",
        "electric_raw": "11.19",
        "eproxy": "1.10"
    },
    {
        "state": "Georgia",
        "stateabbrev": "GA",
        "electric_raw": "10.64",
        "eproxy": "1.05"
    },
    {
        "state": "Hawaii",
        "stateabbrev": "HI",
        "electric_raw": "37.43",
        "eproxy": "3.69"
    },
    {
        "state": "Idaho",
        "stateabbrev": "ID",
        "electric_raw": "8.46",
        "eproxy": "0.84"
    },
    {
        "state": "Illinois",
        "stateabbrev": "IL",
        "electric_raw": "10.08",
        "eproxy": "0.99"
    },
    {
        "state": "Indiana",
        "stateabbrev": "IN",
        "electric_raw": "10.49",
        "eproxy": "1.04"
    },
    {
        "state": "Iowa",
        "stateabbrev": "IA",
        "electric_raw": "10.48",
        "eproxy": "1.03"
    },
    {
        "state": "Kansas",
        "stateabbrev": "KS",
        "electric_raw": "11.13",
        "eproxy": "1.10"
    },
    {
        "state": "Kentucky",
        "stateabbrev": "KY",
        "electric_raw": "9.33",
        "eproxy": "0.92"
    },
    {
        "state": "Louisiana",
        "stateabbrev": "LA",
        "electric_raw": "9.14",
        "eproxy": "0.90"
    },
    {
        "state": "Maine",
        "stateabbrev": "ME",
        "electric_raw": "14.16",
        "eproxy": "1.40"
    },
    {
        "state": "Maryland",
        "stateabbrev": "MD",
        "electric_raw": "12.55",
        "eproxy": "1.24"
    },
    {
        "state": "Massachusetts",
        "stateabbrev": "MA",
        "electric_raw": "14.77",
        "eproxy": "1.46"
    },
    {
        "state": "Michigan",
        "stateabbrev": "MI",
        "electric_raw": "14.08",
        "eproxy": "1.39"
    },
    {
        "state": "Minnesota",
        "stateabbrev": "MN",
        "electric_raw": "11.32",
        "eproxy": "1.12"
    },
    {
        "state": "Mississippi",
        "stateabbrev": "MS",
        "electric_raw": "10.34",
        "eproxy": "1.02"
    },
    {
        "state": "Missouri",
        "stateabbrev": "MO",
        "electric_raw": "9.56",
        "eproxy": "0.94"
    },
    {
        "state": "Montana",
        "stateabbrev": "MT",
        "electric_raw": "10.05",
        "eproxy": "0.99"
    },
    {
        "state": "Nebraska",
        "stateabbrev": "NE",
        "electric_raw": "9.42",
        "eproxy": "0.93"
    },
    {
        "state": "Nevada",
        "stateabbrev": "NV",
        "electric_raw": "11.90",
        "eproxy": "1.17"
    },
    {
        "state": "New Hampshire",
        "stateabbrev": "NH",
        "electric_raw": "16.55",
        "eproxy": "1.63"
    },
    {
        "state": "New Jersey",
        "stateabbrev": "NJ",
        "electric_raw": "15.33",
        "eproxy": "1.51"
    },
    {
        "state": "New Mexico",
        "stateabbrev": "NM",
        "electric_raw": "11.31",
        "eproxy": "1.12"
    },
    {
        "state": "New York",
        "stateabbrev": "NY",
        "electric_raw": "18.26",
        "eproxy": "1.80"
    },
    {
        "state": "North Carolina",
        "stateabbrev": "NC",
        "electric_raw": "10.29",
        "eproxy": "1.02"
    },
    {
        "state": "North Dakota",
        "stateabbrev": "ND",
        "electric_raw": "8.39",
        "eproxy": "0.83"
    },
    {
        "state": "Ohio",
        "stateabbrev": "OH",
        "electric_raw": "11.30",
        "eproxy": "1.12"
    },
    {
        "state": "Oklahoma",
        "stateabbrev": "OK",
        "electric_raw": "9.36",
        "eproxy": "0.92"
    },
    {
        "state": "Oregon",
        "stateabbrev": "OR",
        "electric_raw": "9.68",
        "eproxy": "0.96"
    },
    {
        "state": "Pennsylvania",
        "stateabbrev": "PA",
        "electric_raw": "12.30",
        "eproxy": "1.21"
    },
    {
        "state": "Rhode Island",
        "stateabbrev": "RI",
        "electric_raw": "16.23",
        "eproxy": "1.60"
    },
    {
        "state": "South Carolina",
        "stateabbrev": "SC",
        "electric_raw": "10.96",
        "eproxy": "1.08"
    },
    {
        "state": "South Dakota",
        "stateabbrev": "SD",
        "electric_raw": "9.60",
        "eproxy": "0.95"
    },
    {
        "state": "Tennessee",
        "stateabbrev": "TN",
        "electric_raw": "9.79",
        "eproxy": "0.97"
    },
    {
        "state": "Texas",
        "stateabbrev": "TX",
        "electric_raw": "11.03",
        "eproxy": "1.09"
    },
    {
        "state": "Utah",
        "stateabbrev": "UT",
        "electric_raw": "9.79",
        "eproxy": "0.97"
    },
    {
        "state": "Vermont",
        "stateabbrev": "VT",
        "electric_raw": "14.64",
        "eproxy": "1.44"
    },
    {
        "state": "Virginia",
        "stateabbrev": "VA",
        "electric_raw": "10.49",
        "eproxy": "1.04"
    },
    {
        "state": "Washington",
        "stateabbrev": "WA",
        "electric_raw": "8.48",
        "eproxy": "0.84"
    },
    {
        "state": "West Virginia",
        "stateabbrev": "WV",
        "electric_raw": "9.47",
        "eproxy": "0.93"
    },
    {
        "state": "Wisconsin",
        "stateabbrev": "WI",
        "electric_raw": "13.40",
        "eproxy": "1.32"
    },
    {
        "state": "Wyoming",
        "stateabbrev": "WY",
        "electric_raw": "9.83",
        "eproxy": "0.97"
    }
]
        //Populate select dropdown menu
        var mySelect = $('#mySelect');
            $.each(data, function(i) {
              mySelect.append(
                $('<option></option>').val(data[i].stateabbrev).html(data[i].state)
            );
        });

        //load gas data
        var gas_data = [
    {
        "loc": "US",
        "loc_abbrev": "US",
        "price": "3.65"
    },
    {
        "loc": "East Coast",
        "loc_abbrev": "EC",
        "price": "3.48"
    },
    {
        "loc": "New England",
        "loc_abbrev": "NE",
        "price": "3.58"
    },
    {
        "loc": "Central Atlantic",
        "loc_abbrev": "CAT",
        "price": "3.54"
    },
    {
        "loc": "Lower Atlantic",
        "loc_abbrev": "LAT",
        "price": "3.41"
    },
    {
        "loc": "Midwest",
        "loc_abbrev": "MW",
        "price": "3.84"
    },
    {
        "loc": "Gulf Coast",
        "loc_abbrev": "GC",
        "price": "3.34"
    },
    {
        "loc": "Rocky Mountain",
        "loc_abbrev": "RM",
        "price": "3.73"
    },
    {
        "loc": "West Coast",
        "loc_abbrev": "WC",
        "price": "3.89"
    },
    {
        "loc": "West Coast less California",
        "loc_abbrev": "WCLC",
        "price": "3.74"
    },
    {
        "loc": "California",
        "loc_abbrev": "CA",
        "price": "3.98"
    },
    {
        "loc": "Colorado",
        "loc_abbrev": "CO",
        "price": "3.78"
    },
    {
        "loc": "Florida",
        "loc_abbrev": "FL",
        "price": "3.42"
    },
    {
        "loc": "Massachusetts",
        "loc_abbrev": "MA",
        "price": "3.50"
    },
    {
        "loc": "Minnesota",
        "loc_abbrev": "MN",
        "price": "3.84"
    },
    {
        "loc": "New York",
        "loc_abbrev": "NY",
        "price": "3.70"
    },
    {
        "loc": "Ohio",
        "loc_abbrev": "OH",
        "price": "3.86"
    },
    {
        "loc": "Texas",
        "loc_abbrev": "TX",
        "price": "3.37"
    },
    {
        "loc": "Washington",
        "loc_abbrev": "WA",
        "price": "3.87"
    }
]

        var loop2 = ["onestG","tenthstG","hundrethstG","onestE","tenthstE","hundrethstE","name","price1","price2"];
        var html2 = [];
        //loading a json above and then for loop to define them below using a for loop. 5/6.
    
        for (var i = 0; i<loop2.length; i++) {
            html2.push(document.getElementById(loop2[i]));
        };  

        //load initial values

                var onesG = String(gas_data[0].price).charAt(0);
                var tenthsG = String(gas_data[0].price).charAt(2);
                var hundrethsG = String(gas_data[0].price).charAt(3);
                                
                var onesE = String(data[0].eproxy).charAt(0);
                var tenthsE = String(data[0].eproxy).charAt(2);
                var hundrethsE = String(data[0].eproxy).charAt(3);

                //put those characters collected into the appropriate innerHTML

                html2[0].innerHTML=onesG;
                html2[1].innerHTML=tenthsG;
                html2[2].innerHTML=hundrethsG;
                

                html2[3].innerHTML=onesE;
                html2[4].innerHTML=tenthsE;
                html2[5].innerHTML=hundrethsE;

//                html2[6].innerHTML=data.features[0].state;
//                html2[7].innerHTML="The price of gasoline is <strong>$"+data.features[0].regular+"</strong> per gallon.";
//                html2[8].innerHTML="The price of electricity is <strong>$"+data.features[0].eproxy+"</strong> per egallon.";


        //what happens when you select a state
            $('select').change(function (e){
            e.preventDefault();
            for (var i=0;i<data.length;i++)
            {
                //When the value selected equals the JSONs state abbreviation, gather the data at specific characters
                if (this.value === data[i].stateabbrev) {
                                    
                    var onesE = String(data[i].eproxy).charAt(0);
                    var tenthsE = String(data[i].eproxy).charAt(2);
                    var hundrethsE = String(data[i].eproxy).charAt(3);

                    //put those characters collected into the appropriate innerHTML

                    html2[3].innerHTML=onesE;
                    html2[4].innerHTML=tenthsE;
                    html2[5].innerHTML=hundrethsE;
                };
            }

            if (this.value === "MA" ||this.value === "NY" ||this.value === "FL" ||this.value === "OH" ||this.value === "TX" ||this.value === "CO" ||this.value === "CA" ||this.value === "WA" || this.value === "MN") 
            {
                    for (var i=0;i<gas_data.length;i++)
                        {
                            //When the value selected equals the JSONs state abbreviation, gather the data at specific characters
                            if (this.value === gas_data[i].loc_abbrev) {
                                            
                                var onesG = String(gas_data[i].price).charAt(0);
                                var tenthsG = String(gas_data[i].price).charAt(2);
                                var hundrethsG = String(gas_data[i].price).charAt(3);    

                                html2[0].innerHTML=onesG;
                                html2[1].innerHTML=tenthsG; 
                                html2[2].innerHTML=hundrethsG;

                            };
                        }
            } 

            else{

                var pr;
                if (this.value === "ME" ||this.value === "NH" ||this.value === "VT" ||this.value === "NH" ||this.value === "CT" ||this.value === "RI") 
                {pr = gas_data[2].price;}            
                else if (this.value === "NY" ||this.value === "PA" ||this.value === "NJ" ||this.value === "DE" ||this.value === "MD" || this.value === "DC")
                {pr = gas_data[3].price;}            
                else if (this.value === "WV" ||this.value === "VA" ||this.value === "NC" ||this.value === "SC" ||this.value === "GA" )
                {pr = gas_data[4].price;}            
                else if (this.value === "AL" ||this.value === "MS" ||this.value === "AR" ||this.value === "LA" ||this.value === "NM" )
                {pr = gas_data[6].price;}            
                else if (this.value === "WY" ||this.value === "MT" ||this.value === "ID" ||this.value === "UT" )
                {pr = gas_data[7].price;}            
                else if (this.value === "OR" ||this.value === "NV" ||this.value === "AZ" ||this.value === "AK" ||this.value === "HI" )
                {pr = gas_data[9].price;}            
                else if (this.value === "ND" ||this.value === "SD" ||this.value === "NE" ||this.value === "KS" ||this.value === "OK" ||this.value === "MO" ||this.value === "IA" ||this.value === "WI" ||this.value === "MI" ||this.value === "IL" ||this.value === "IN" ||this.value === "KY" ||this.value === "TN" )
                {pr = gas_data[5].price;} 
                else if (this.value === "US")
                {pr = gas_data[0].price;}            

                var onesG = String(pr).charAt(0);
                var tenthsG = String(pr).charAt(2);
                var hundrethsG = String(pr).charAt(3);       

                html2[0].innerHTML=onesG;
                html2[1].innerHTML=tenthsG; 
                html2[2].innerHTML=hundrethsG;

            };

     });
   
  });

}(jQuery));