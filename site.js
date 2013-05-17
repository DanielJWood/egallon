
$(document).ready(function() {
//Load state price json
      $.getJSON('data/electric.json',  function(data) {
      //$.getJSON('https://cms.doe.gov/sites/prod/files/price.json',  function(data) {
        //Populate select dropdown menu
        var mySelect = $('#mySelect');
            $.each(data, function(i) {
              mySelect.append(
                $('<option></option>').val(data[i].stateabbrev).html(data[i].state)
            );
        });

        //load gas data
        $.getJSON('data/gas.json', function(gas_data) {
            console.log(gas_data);
            console.log(gas_data[0]);

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

                                var onesG = String(pr).charAt(0);
                                var tenthsG = String(pr).charAt(2);
                                var hundrethsG = String(pr).charAt(3);       
            
                                html2[0].innerHTML=onesG;
                                html2[1].innerHTML=tenthsG; 
                                html2[2].innerHTML=hundrethsG;

            };
        });
       });
     });
   
  });

