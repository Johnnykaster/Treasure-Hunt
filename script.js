$(".1").show();
$(".1").click ( function () {
    $(".2").show ();
    $(".1").hide ();
    $(".treasure").hide ();
});
$(".header").click ( function () {
    $(".2").hide ();
    $(".header").text("Hey!! Why'd you hit me!??!! I'm callin the cops!!!");
    $(".3").show ();
    $(".car").show ();
});
$(".car").dblclick ( function () {
    $(".3").hide ();
    $(".car").hide ();
    $("body").css("background-image", "url('https://ewscripps.brightspotcdn.com/dims4/default/213ab42/2147483647/strip/true/crop/640x360+0+0/resize/1280x720!/quality/90/?url=https%3A%2F%2Fmediaassets.thedenverchannel.com%2Fphoto%2F2017%2F11%2F10%2Fjeffco%20jail%2011_1510343219148_71254398_ver1.0_640_480.jpg')");
    $(".header").hide();
    $(".4").show();
    $(".tunnel").show();
});
$(".tunnel").mouseenter( function() {
   $(".tunnel").hide(); 
   $("body").css("background-image", "url('https://qph.fs.quoracdn.net/main-qimg-c6b93df86a7b78902dfbabf8502215c1')");
   $("body").css("background-size", "cover");
   $(".4").hide();
   $(".5").show();
   $(".spoon").show();
});
$(".spoon").click ( function() {
    $(".dig").toggle();
    $(".spoon").hide();
    $(".5").text("keep digging until you break through to the other side!");
});
$(".dig").dblclick ( function () {
    $(".dig").hide();
    $("body").css("background-image", "url('https://digitalalabama.com/wp-content/uploads/2018/10/cave-treasure.jpg')");
    $(".5").hide();
    $(".win").show();
    $(".win").css("font-size", "50px");
    $(".4").show();
    $(".4").text("WERE GONNA BE RITCH!!!!!");
});




