$(document).ready(function(){
	//sticky menubar
	$(".js--services-section").waypoint(function(direction){
		if(direction=="down"){
			$("nav").addClass("sticky");
		}else{
			$("nav").removeClass("sticky");
		};
	});
	
	//scroll
$("a").on("click",function(event){
	if(""!==this.hash){
		event.preventDefault();
		var hash = this.hash;
		$("html, body").animate({scrollTop:$(hash).offset().top},500,function(){
			window.location.hash = hash
			})}});
	
});

	//mobile menuba
function openmenu(){
	document.getElementById("mobileNav").style.width="100%";
};
function closenav(){
	document.getElementById("mobileNav").style.width="0%";
};
// slider
$("#mySlider2").AnimatedSlider( { prevButton: "#btn_prev2", 
                                             nextButton: "#btn_next2",
                                             visibleItems: 5,
                                             infiniteScroll: true,
                                             willChangeCallback: function(obj, item) { $("#statusText").text("Will change to " + item); },
                                             changedCallback: function(obj, item) { $("#statusText").text("Changed to " + item); }
                                          });