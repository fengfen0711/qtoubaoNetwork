
$(function() {	
	//登录注册切换
	login_regiter();
	
	var a = $.getUrlParam('a');
	if (a == "1") {
		$("#theWorldVariety").stop().fadeOut(800);
		$("#theWorldBlue").stop().fadeIn(800);
		$(".logBoxW_registerBtn").html("立即登录")
		$("#loginBox").removeClass("roundZ1")
		$("#registerBox").removeClass("roundZ")
		$("#loginBox").addClass("roundZ")
		$("#registerBox").addClass("roundZ1")
	}else{
		$("#theWorldBlue").stop().fadeOut(800);
	}
})

//登录注册切换
function login_regiter(){
	$(".logBoxW_registerBtn").click(function(){
		if ($(".logBoxW_registerBtn").html()=="立即注册") {
			$("#theWorldVariety").stop().fadeOut(800);
			$("#theWorldBlue").stop().fadeIn(800);
			$(".logBoxW_registerBtn").html("立即登录")
			$("#loginBox").removeClass("roundZ1")
			$("#registerBox").removeClass("roundZ")
			$("#loginBox").addClass("roundZ")
			$("#registerBox").addClass("roundZ1")
		}
		else if ($(".logBoxW_registerBtn").html()=="立即登录") {
			$("#theWorldBlue").stop().fadeOut(800);
			$("#theWorldVariety").stop().fadeIn(800);
			$(".logBoxW_registerBtn").html("立即注册")
			$("#loginBox").removeClass("roundZ")
			$("#registerBox").removeClass("roundZ1")
			$("#registerBox").addClass("roundZ")
			$("#loginBox").addClass("roundZ1")
		}
	})
}

(function ($) {
    $.getUrlParam = function (name) {
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
        var r = window.location.search.substr(1).match(reg);
        if (r != null) return unescape(r[2]); return null;
    }
})(jQuery)



