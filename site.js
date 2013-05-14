
$(document).ready(function() {

//Load state price json
    $.getJSON('data/price.json',  function(data) {
        
        //Populate select dropdown menu
        var mySelect = $('#mySelect');
            $.each(data.features, function(i) {
              mySelect.append(
                $('<option></option>').val(data.features[i].stateabbrev).html(data.features[i].state)
            );
        });
    
        var loop2 = ["onestG","tenthstG","hundrethstG","onestE","tenthstE","hundrethstE","name","price1","price2"];
        var html2 = [];
        //loading a json above and then for loop to define them below using a for loop. 5/6. Need to do the following:
    
        for (var i = 0; i<loop2.length; i++) {
            html2.push(document.getElementById(loop2[i]));
        };  

        //load initial values

                var onesG = String(data.features[0].regular).charAt(0);
                var tenthsG = String(data.features[0].regular).charAt(2);
                var hundrethsG = String(data.features[0].regular).charAt(3);
                                
                var onesE = String(data.features[0].eproxy).charAt(0);
                var tenthsE = String(data.features[0].eproxy).charAt(2);
                var hundrethsE = String(data.features[0].eproxy).charAt(3);

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
            for (var i=0;i<data.features.length;i++)
            {
                //When the value selected equals the JSONs state abbreviation, gather the data at specific characters
                if (this.value === data.features[i].stateabbrev) {

                    var onesG = String(data.features[i].regular).charAt(0);
                    var tenthsG = String(data.features[i].regular).charAt(2);
                    var hundrethsG = String(data.features[i].regular).charAt(3);
                                    
                    var onesE = String(data.features[i].eproxy).charAt(0);
                    var tenthsE = String(data.features[i].eproxy).charAt(2);
                    var hundrethsE = String(data.features[i].eproxy).charAt(3);

                    //put those characters collected into the appropriate innerHTML

                    html2[0].innerHTML=onesG;
                    html2[1].innerHTML=tenthsG; 
                    html2[2].innerHTML=hundrethsG;
                    

                    html2[3].innerHTML=onesE;
                    html2[4].innerHTML=tenthsE;
                    html2[5].innerHTML=hundrethsE;

                    html2[6].innerHTML=data.features[i].state;
                    html2[7].innerHTML="The price of gasoline is <strong>$"+data.features[i].regular+"</strong> per gallon.";
                    html2[8].innerHTML="The price of electricity is <strong>$"+data.features[i].eproxy+"</strong> per egallon.";
                };
            }
        });
    });
  });