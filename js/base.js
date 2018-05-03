//接口地址
//开发
//var URL1 = "http://192.168.171.12:9000/insd/";
//测试
//var URL1 = "http://58.132.205.171:9000/insd/";
//生产
var URL1 = "http://lb.qtoubao.cn:9000/insd/"

var deviceWidth = document.documentElement.clientWidth;

$(function () {
	//获取url传参
	(function ($) {
	    $.getUrlParam = function (name) {
	        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)");
	        var r = window.location.search.substr(1).match(reg);
	        if (r != null) return unescape(r[2]); return null;
	    }
	})(jQuery);
	
	//判断是否是登录状态
	if (sessionStorage.getItem("regTel")) {
		console.log(sessionStorage.getItem("regTel"))
		$(".userPhone").html(sessionStorage.getItem("regTel"))
		$(".navInfo1").addClass("disnone");
		$(".navInfo2").removeClass("disnone");
	}
	
	//退出登录
	$(".quitBtn").click(function () {
		var userQuitInfo = {
			'loginNme' : sessionStorage.getItem("regTel"),
			'token' : sessionStorage.getItem('token')
		}
		var userQuit = JSON.stringify(userQuitInfo);
		//退出登录接口
		quitAjax (userQuit);
	})
	
	//nav 
	$(".navInfo li").mouseover(function(){
		$(this).addClass("navInfoLi");
		$(this).siblings().removeClass("navInfoLi");
		$(this).find("span.borderBottom").addClass("borderBottomSpan");
		$(this).siblings().find("span.borderBottom").removeClass("borderBottomSpan");
	})
	$(".navInfo li").mouseout(function(){
		setTimeout(function() {
			$(this).removeClass("navInfoLi");
			$(this).find("span.borderBottom").removeClass("borderBottomSpan");
		}, 400)
	})
	
	
})

//退出登录
function quitAjax (data) {
	$.ajax({
		type : 'post',
		url : URL1 + 'logout_jsons.tml',
		data : data,
		dataType : 'json',
		cache : false,
		error : function(data) {
			console.log(data);
		},
		success : function(data) {
			console.log(data);
			sessionStorage.removeItem("regTel")
			sessionStorage.removeItem("token")
			$(".userPhone").html("");
			$(".navInfo2").addClass("disnone");
			$(".navInfo1").removeClass("disnone");
			window.open("login_register.html","_self");
		}
	});
	
}