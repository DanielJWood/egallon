function getIEVersion(){
    var agent = navigator.userAgent;
    var reg = /MSIE\s?(\d+)(?:\.(\d+))?/i;
    var matches = agent.match(reg);
    if (matches != null) {
        return { major: matches[1], minor: matches[2] };
    }
    return { major: "-1", minor: "-1" };
}

var ie_version =  getIEVersion();
var is_ie10 = ie_version.major == 10;

(function ($) {
$(document).ready(function() {

    var timesRun = 0;

    //on load, cycle through numbers to data
    var mp = setInterval(function () {
                minutePlay()
                
            }, 100);
    var sp = setInterval(function () {
                secondPlay()
            }, 100);
    var ml = setInterval(function () {
                milliPlay()
            }, 100); 
    var mp2 = setInterval(function () {
                minutePlay2()
            }, 100);
    var sp2 = setInterval(function () {
                secondPlay2()
            }, 100);
    var ml2 = setInterval(function () {
                milliPlay2();
                //step through time to get to 8 times (there are 7 li's in html)
                timesRun += 1;

                //control number of times through
                if (is_ie10 === true) {num = 2} else{num = 8};

                //when it gets to 8 times, chop it off.     
                if(timesRun === num){
                    clearInterval(mp);
                    clearInterval(sp);
                    clearInterval(ml);
                    clearInterval(mp2);
                    clearInterval(sp2);
                    clearInterval(ml2);
                }
            }, 100);   

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
                
            }, 100);
    var sp = setInterval(function () {
                secondPlay()
            }, 100);
    var ml = setInterval(function () {
                milliPlay()
            }, 100); 
    var mp2 = setInterval(function () {
                minutePlay2()
            }, 100);
    var sp2 = setInterval(function () {
                secondPlay2()
            }, 100);
    var ml2 = setInterval(function () {
                milliPlay2();
                //step through time to get to 8 times (there are 7 li's in html)
                timesRun += 1;

                //control number of times through
                if (is_ie10 === true) {num = 2} else{num = 8};

                //when it gets to 8 times, chop it off.     
                if(timesRun === num){
                    clearInterval(mp);
                    clearInterval(sp);
                    clearInterval(ml);
                    clearInterval(mp2);
                    clearInterval(sp2);
                    clearInterval(ml2);
                }
            }, 100);                  
    });        
if (is_ie10===true) {eqnum = 5; eqnumplus = 6} else{ eqnum = 0; eqnumplus = 0};
console.log(eqnum);
console.log(eqnumplus);
    function milliPlay() {
        $("body").removeClass("play");
        var aa = $("ul.milliPlay li.active");



//if nothing in aa, go through sequence to step through number to next li
        if (aa.html() == undefined) {
            aa = $("ul.milliPlay li").eq(eqnum);
            aa.addClass("before")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        //On last child add active and stop their
        else if (aa.is(":last-child")) {
            $("ul.milliPlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
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
            aa = $("ul.secondPlay li").eq(eqnum);
            aa.addClass("before")
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
            aa = $("ul.minutePlay li").eq(eqnum);
            aa.addClass("before")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        else if (aa.is(":last-child")) {
            $("ul.minutePlay li").removeClass("before");
            aa.addClass("before").removeClass("active");
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
            aa = $("ul.secondPlay2 li").eq(eqnum);
            aa.addClass("before")
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
            aa = $("ul.minutePlay2 li").eq(eqnum);
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

            aa = $("ul.milliPlay2 li").eq(eqnumplus);
            aa.addClass("before")
                .next("li")
                .addClass("active")
                .closest("body")
                .addClass("play");

        }
        //On last child add active and stop their
        else if (aa.is(":last-child")) {
            $("ul.milliPlay2 li").removeClass("before");
            aa.addClass("before").removeClass("active");
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