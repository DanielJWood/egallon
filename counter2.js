(function ($) {
$(document).ready(function() {

    var timesRun = 0;

    //on load, cycle through numbers to data
    var mp = setInterval(function () {
                minutePlay()
                
            }, 500);
    var sp = setInterval(function () {
                secondPlay()
            }, 500);
    var ml = setInterval(function () {
                milliPlay()
            }, 500); 
    var mp2 = setInterval(function () {
                minutePlay2()
            }, 500);
    var sp2 = setInterval(function () {
                secondPlay2()
            }, 500);
    var ml2 = setInterval(function () {
                milliPlay2();
                //step through time to get to 8 times (there are 7 li's in html)
                timesRun += 1;

                //when it gets to 8 times, chop it off.     
                if(timesRun === 8){
                    clearInterval(mp);
                    clearInterval(sp);
                    clearInterval(ml);
                    clearInterval(mp2);
                    clearInterval(sp2);
                    clearInterval(ml2);
                }
            }, 500);   

//on select, cycle through numbers to new data
  $('select').change(function (e){
    //reset iterations variable to 0
    var timesRun = 0;

    //On select when last child, reset to no active, so that we can start process of function correctly.
    var bb = $("ul.secondPlay li.active"); 
    if (bb.is(":last-child")) {
        $("ul.secondPlay li").removeClass("active");
        $("ul.minutePlay li").removeClass("active");
        $("ul.milliPlay li").removeClass("active");
        $("ul.secondPlay2 li").removeClass("active");
        $("ul.minutePlay2 li").removeClass("active");
        $("ul.milliPlay2 li").removeClass("active");
    };
    
    var mp = setInterval(function () {
                minutePlay()
                
            }, 500);
    var sp = setInterval(function () {
                secondPlay()
            }, 500);
    var ml = setInterval(function () {
                milliPlay()
            }, 500); 
    var mp2 = setInterval(function () {
                minutePlay2()
            }, 500);
    var sp2 = setInterval(function () {
                secondPlay2()
            }, 500);
    var ml2 = setInterval(function () {
                milliPlay2();
                //step through time to get to 8 times (there are 7 li's in html)
                timesRun += 1;

                //when it gets to 8 times, chop it off.     
                if(timesRun === 8){
                    clearInterval(mp);
                    clearInterval(sp);
                    clearInterval(ml);
                    clearInterval(mp2);
                    clearInterval(sp2);
                    clearInterval(ml2);
                }
            }, 500);                  
    });


    function milliPlay() {
        $("body").removeClass("play");
        var aa = $("ul.milliPlay li.active");

//if nothing in aa, go through sequence to step through number to next li
        if (aa.html() == undefined) {
            aa = $("ul.milliPlay li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        //On last child add active and stop their
        else if (aa.is(":last-child")) {
            $("ul.milliPlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.milliPlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        //normally, (not first/last) cycle through, add active to next li, take away current active
        else {
            $("ul.milliPlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }

    

    function secondPlay() {
        $("body").removeClass("play");
        var aa = $("ul.secondPlay li.active");

        if (aa.html() == undefined) {
            aa = $("ul.secondPlay li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.secondPlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.secondPlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }

    function minutePlay() {
        $("body").removeClass("play");
        var aa = $("ul.minutePlay li.active");

        if (aa.html() == undefined) {
            aa = $("ul.minutePlay li").eq(5);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.minutePlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
           // aa = $("ul.minutePlay li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.minutePlay li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }


    function secondPlay2() {
        $("body").removeClass("play");
        var aa = $("ul.secondPlay2 li.active");

        if (aa.html() == undefined) {
            aa = $("ul.secondPlay2 li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.secondPlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.secondPlay2 li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }

    function minutePlay2() {
        $("body").removeClass("play");
        var aa = $("ul.minutePlay2 li.active");

        if (aa.html() == undefined) {
            aa = $("ul.minutePlay2 li").eq(6);
            aa.addClass("before")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.minutePlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        else {
            $("ul.minutePlay2 li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }


function milliPlay2() {
        $("body").removeClass("play");
        var aa = $("ul.milliPlay2 li.active");

//if nothing in aa, go through sequence to step through number to next li
        if (aa.html() == undefined) {
            aa = $("ul.milliPlay2 li").eq(0);
            aa.addClass("before")
                //.removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        //On last child add active and stop their
        else if (aa.is(":last-child")) {
            $("ul.milliPlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
            //aa = $("ul.milliPlay2 li").eq(0);
            aa.addClass("active")
                .closest("body")
                .addClass("play");
        }
        //normally, (not first/last) cycle through, add active to next li, take away current active
        else {
            $("ul.milliPlay2 li").removeClass("before");
            aa.addClass("before")
                .removeClass("active")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");
        }

    }
    
});
}(jQuery));