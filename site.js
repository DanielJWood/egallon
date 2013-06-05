(function ($) {

$(document).ready(function() {
//Load state price json
    var data = [
    
    {
        "state": "US Average",
        "stateabbrev": "US",
        "electric_raw": "11.47",
        "eproxy": "1.174528"
    },
    {
        "state": "Alabama",
        "stateabbrev": "AL",
        "electric_raw": "10.84",
        "eproxy": "1.110016"
    },
    {
        "state": "Alaska",
        "stateabbrev": "AK",
        "electric_raw": "16.68",
        "eproxy": "1.708032"
    },
    {
        "state": "Arizona",
        "stateabbrev": "AZ",
        "electric_raw": "10.25",
        "eproxy": "1.0496"
    },
    {
        "state": "Arkansas",
        "stateabbrev": "AR",
        "electric_raw": "8.74",
        "eproxy": "0.894976"
    },
    {
        "state": "California",
        "stateabbrev": "CA",
        "electric_raw": "16.40",
        "eproxy": "1.67936"
    },
    {
        "state": "Colorado",
        "stateabbrev": "CO",
        "electric_raw": "11.06",
        "eproxy": "1.132544"
    },
    {
        "state": "Connecticut",
        "stateabbrev": "CT",
        "electric_raw": "17.05",
        "eproxy": "1.74592"
    },
    {
        "state": "Delaware",
        "stateabbrev": "DE",
        "electric_raw": "12.85",
        "eproxy": "1.31584"
    },
    {
        "state": "District of Columbia",
        "stateabbrev": "DC",
        "electric_raw": "12.06",
        "eproxy": "1.234944"
    },
    {
        "state": "Florida",
        "stateabbrev": "FL",
        "electric_raw": "11.34",
        "eproxy": "1.161216"
    },
    {
        "state": "Georgia",
        "stateabbrev": "GA",
        "electric_raw": "10.25",
        "eproxy": "1.0496"
    },
    {
        "state": "Hawaii",
        "stateabbrev": "HI",
        "electric_raw": "37.86",
        "eproxy": "3.876864"
    },
    {
        "state": "Idaho",
        "stateabbrev": "ID",
        "electric_raw": "8.59",
        "eproxy": "0.879616"
    },
    {
        "state": "Illinois",
        "stateabbrev": "IL",
        "electric_raw": "10.14",
        "eproxy": "1.038336"
    },
    {
        "state": "Indiana",
        "stateabbrev": "IN",
        "electric_raw": "9.98",
        "eproxy": "1.021952"
    },
    {
        "state": "Iowa",
        "stateabbrev": "IA",
        "electric_raw": "10.13",
        "eproxy": "1.037312"
    },
    {
        "state": "Kansas",
        "stateabbrev": "KS",
        "electric_raw": "10.62",
        "eproxy": "1.087488"
    },
    {
        "state": "Kentucky",
        "stateabbrev": "KY",
        "electric_raw": "9.25",
        "eproxy": "0.9472"
    },
    {
        "state": "Louisiana",
        "stateabbrev": "LA",
        "electric_raw": "8.76",
        "eproxy": "0.897024"
    },
    {
        "state": "Maine",
        "stateabbrev": "ME",
        "electric_raw": "14.61",
        "eproxy": "1.496064"
    },
    {
        "state": "Maryland",
        "stateabbrev": "MD",
        "electric_raw": "12.50",
        "eproxy": "1.28"
    },
    {
        "state": "Massachusetts",
        "stateabbrev": "MA",
        "electric_raw": "14.28",
        "eproxy": "1.462272"
    },
    {
        "state": "Michigan",
        "stateabbrev": "MI",
        "electric_raw": "13.65",
        "eproxy": "1.39776"
    },
    {
        "state": "Minnesota",
        "stateabbrev": "MN",
        "electric_raw": "11.05",
        "eproxy": "1.13152"
    },
    {
        "state": "Mississippi",
        "stateabbrev": "MS",
        "electric_raw": "9.99",
        "eproxy": "1.022976"
    },
    {
        "state": "Missouri",
        "stateabbrev": "MO",
        "electric_raw": "8.93",
        "eproxy": "0.914432"
    },
    {
        "state": "Montana",
        "stateabbrev": "MT",
        "electric_raw": "9.81",
        "eproxy": "1.004544"
    },
    {
        "state": "Nebraska",
        "stateabbrev": "NE",
        "electric_raw": "8.72",
        "eproxy": "0.892928"
    },
    {
        "state": "Nevada",
        "stateabbrev": "NV",
        "electric_raw": "11.24",
        "eproxy": "1.150976"
    },
    {
        "state": "New Hampshire",
        "stateabbrev": "NH",
        "electric_raw": "16.06",
        "eproxy": "1.644544"
    },
    {
        "state": "New Jersey",
        "stateabbrev": "NJ",
        "electric_raw": "15.30",
        "eproxy": "1.56672"
    },
    {
        "state": "New Mexico",
        "stateabbrev": "NM",
        "electric_raw": "10.88",
        "eproxy": "1.114112"
    },
    {
        "state": "New York",
        "stateabbrev": "NY",
        "electric_raw": "18.02",
        "eproxy": "1.845248"
    },
    {
        "state": "North Carolina",
        "stateabbrev": "NC",
        "electric_raw": "10.19",
        "eproxy": "1.043456"
    },
    {
        "state": "North Dakota",
        "stateabbrev": "ND",
        "electric_raw": "7.71",
        "eproxy": "0.789504"
    },
    {
        "state": "Ohio",
        "stateabbrev": "OH",
        "electric_raw": "11.01",
        "eproxy": "1.127424"
    },
    {
        "state": "Oklahoma",
        "stateabbrev": "OK",
        "electric_raw": "8.01",
        "eproxy": "0.820224"
    },
    {
        "state": "Oregon",
        "stateabbrev": "OR",
        "electric_raw": "9.65",
        "eproxy": "0.98816"
    },
    {
        "state": "Pennsylvania",
        "stateabbrev": "PA",
        "electric_raw": "12.35",
        "eproxy": "1.26464"
    },
    {
        "state": "Rhode Island",
        "stateabbrev": "RI",
        "electric_raw": "14.80",
        "eproxy": "1.51552"
    },
    {
        "state": "South Carolina",
        "stateabbrev": "SC",
        "electric_raw": "11.63",
        "eproxy": "1.190912"
    },
    {
        "state": "South Dakota",
        "stateabbrev": "SD",
        "electric_raw": "9.07",
        "eproxy": "0.928768"
    },
    {
        "state": "Tennessee",
        "stateabbrev": "TN",
        "electric_raw": "10.03",
        "eproxy": "1.027072"
    },
    {
        "state": "Texas",
        "stateabbrev": "TX",
        "electric_raw": "10.89",
        "eproxy": "1.115136"
    },
    {
        "state": "Utah",
        "stateabbrev": "UT",
        "electric_raw": "9.69",
        "eproxy": "0.992256"
    },
    {
        "state": "Vermont",
        "stateabbrev": "VT",
        "electric_raw": "17.73",
        "eproxy": "1.815552"
    },
    {
        "state": "Virginia",
        "stateabbrev": "VA",
        "electric_raw": "9.99",
        "eproxy": "1.022976"
    },
    {
        "state": "Washington",
        "stateabbrev": "WA",
        "electric_raw": "8.50",
        "eproxy": "0.8704"
    },
    {
        "state": "West Virginia",
        "stateabbrev": "WV",
        "electric_raw": "9.37",
        "eproxy": "0.959488"
    },
    {
        "state": "Wisconsin",
        "stateabbrev": "WI",
        "electric_raw": "13.10",
        "eproxy": "1.34144"
    },
    {
        "state": "Wyoming",
        "stateabbrev": "WY",
        "electric_raw": "9.51",
        "eproxy": "0.973824"
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
        "price": "3.645"
    },
    {
        "loc": "East Coast",
        "loc_abbrev": "EC",
        "price": "3.501"
    },
    {
        "loc": "New England",
        "loc_abbrev": "NE",
        "price": "3.591"
    },
    {
        "loc": "Central Atlantic",
        "loc_abbrev": "CAT",
        "price": "3.557"
    },
    {
        "loc": "Lower Atlantic",
        "loc_abbrev": "LAT",
        "price": "3.431"
    },
    {
        "loc": "Midwest",
        "loc_abbrev": "MW",
        "price": "3.779"
    },
    {
        "loc": "Gulf Coast",
        "loc_abbrev": "GC",
        "price": "3.366"
    },
    {
        "loc": "Rocky Mountain",
        "loc_abbrev": "RM",
        "price": "3.725"
    },
    {
        "loc": "West Coast",
        "loc_abbrev": "WC",
        "price": "3.933"
    },
    {
        "loc": "West Coast less California",
        "loc_abbrev": "WCLC",
        "price": "3.779"
    },
    {
        "loc": "California",
        "loc_abbrev": "CA",
        "price": "4.022"
    },
    {
        "loc": "Colorado",
        "loc_abbrev": "CO",
        "price": "3.82"
    },
    {
        "loc": "Florida",
        "loc_abbrev": "FL",
        "price": "3.442"
    },
    {
        "loc": "Massachusetts",
        "loc_abbrev": "MA",
        "price": "3.511"
    },
    {
        "loc": "Minnesota",
        "loc_abbrev": "MN",
        "price": "4.022"
    },
    {
        "loc": "New York",
        "loc_abbrev": "NY",
        "price": "3.72"
    },
    {
        "loc": "Ohio",
        "loc_abbrev": "OH",
        "price": "3.676"
    },
    {
        "loc": "Texas",
        "loc_abbrev": "TX",
        "price": "3.397"
    },
    {
        "loc": "Washington",
        "loc_abbrev": "WA",
        "price": "3.962"
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