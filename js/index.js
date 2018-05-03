
$(function() {
	//img_download
	$(".Android_download").mousemove(function(){
		$(".QTB_cut_vison").css("display","none");
		$(".Android_down").css("display","block");
	})
	$(".Android_download").mouseout(function(){
		$(".Android_down").css("display","none");
		$(".QTB_cut_vison").css("display","block");
	})
	$(".iOS_download").mousemove(function(){
		$(".QTB_cut_vison").css("display","none");
		$(".ios_down").css("display","block");
	})
	$(".iOS_download").mouseout(function(){
		$(".ios_down").css("display","none");
		$(".QTB_cut_vison").css("display","block");
	})
	
	
	//回到顶部
	var top = document.getElementById("top");
	dingbu(top);
	
	//input
	indexInputTxt();
	
	//点击登录
	selectToLogin ();
})

//回到顶部
function dingbu(obj){
	var h = 0;
	var selfUrl1 = window.location.href;
	var urlArr1 = selfUrl1.split("/");
	if (urlArr1[urlArr1.length-1].indexOf("?") != -1) {
		var self_url = urlArr1[urlArr1.length-1].split("?")[0];
	}else{
		var self_url = urlArr1[urlArr1.length-1].split("#")[0];
	}
	console.log(self_url)
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var $scrolltop = $(this).scrollTop();
	var height = document.documentElement.clientHeight/2;
	
	//nav
	if (self_url == "index.html" || self_url == "") {
		//nav
		if (scrollTop > "1") {
			$(".navBoxZ1").css("display","block");
			obj.style.display = "block";
		}else{
			$(".navBoxZ1").css("display","none");
			obj.style.display = "none";
		}
		h = scrollTop;
	}	
	$(window).scroll(function () {
		var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
		var $scrolltop = $(this).scrollTop();
		var height = document.documentElement.clientHeight/2;
		
		//nav
		if (self_url == "index.html" || self_url == "") {
			//nav
//			console.log(scrollTop)
			if (scrollTop > "1") {
				$(".navBoxZ1").css("display","block");
				obj.style.display = "block";
			}else{
				$(".navBoxZ1").css("display","none");
				obj.style.display = "none";
			}
			h = scrollTop;
		}		
	})
	
	var timer;
	var bClear = true;
	
	obj.onclick = function(){
		timer = setInterval(function(){
			bClear = true;
			var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
			var iSpeed = Math.floor(-scrolltop/10);
			if(scrolltop == 0){
				clearInterval(timer);
			}
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop + iSpeed;
		},50);
			
		window.onscroll = function(){
			if(!bClear){
				clearInterval(timer);
			}
			bClear = false;
		}
	}
}

//input
function indexInputTxt() {
	$(".delX").on('mousedown',function(e) {
		$(this).parent().find("input").val("")
		$(this).parent().find("input").focus();
	})
	$(".input_grop input").on({
		input: function() {
			if($(this).val() != "") {
				$(this).parent().find("span.delX").css("display", "block");
			}
		}
	})
	$("#logBoxTel").focus(function() {
		if($(this).val() != "") {
			$("#delX1").css("display", "block");
		}
	}).blur(function() {
		setTimeout(function(athis) {
			$("#delX1").css("display", "none");
		}, 200)
		if ($("#logBoxTel").val() != "") {
			if (testTel($("#logBoxTel"))) {
				if (testPassWord($("#logBoxPass"))) {
					$(".errorDes").css("display","none");
					$(".logBoxTitle").removeClass("logBoxTitle1");
					$("#logBox_logBtn").addClass("logBox_logBtn1");
				}else{
					$(".logBoxTitle").addClass("logBoxTitle1");
					$(".errorDes").css("display","block");
					$("#logBox_logBtn").removeClass("logBox_logBtn1");
				}
			}else{
				$(".logBoxTitle").addClass("logBoxTitle1");
				$(".errorDes").css("display","block");
			}
		}
		if ($("#logBoxTel").val() == "" && $("#logBoxPass").val() == "") {
			$(".errorDes").css("display","none");
			$(".logBoxTitle").removeClass("logBoxTitle1");
		}
	})
	$("#logBoxPass").focus(function() {
		if($(this).val() != "") {
			$("#delX2").css("display", "block");
		}
	}).blur(function() {
		setTimeout(function(athis) {
			$("#delX2").css("display", "none");
		}, 200)
		if ($("#logBoxPass").val() != "") {
			if (testPassWord($("#logBoxPass"))) {
				if ($("#logBoxTel").val() != "" && testTel($("#logBoxTel"))) {
					$(".errorDes").css("display","none");
					$(".logBoxTitle").removeClass("logBoxTitle1");
					$("#logBox_logBtn").addClass("logBox_logBtn1");
				}else{
					$(".logBoxTitle").addClass("logBoxTitle1");
					$(".errorDes").css("display","block");
					$("#logBox_logBtn").removeClass("logBox_logBtn1");
				}
			}else{
				$(".logBoxTitle").addClass("logBoxTitle1");
				$(".errorDes").css("display","block");
			}
		}
		if ($("#logBoxTel").val() == "" && $("#logBoxPass").val() == "") {
			$(".errorDes").css("display","none");
			$(".logBoxTitle").removeClass("logBoxTitle1");
		}
	})
}

//点击登录
function selectToLogin () {
	$("#logBox_logBtn").click(function(){
		if (testTel($("#logBoxTel")) && testPassWord($("#logBoxPass"))) {			
			var loginInfo = {
				"loginNme": $("#logBoxTel").val(),
				"loginType": "B",
				"loginPwd": $("#logBoxPass").val()
			}
			var login = JSON.stringify(loginInfo);
			loginAjax (login);
		}
	})
}

//登录接口
function loginAjax (login) {
	$.ajax({
		type : 'post',
		url : URL1 + 'login_jsons.tml',
		data : login,
		dataType : 'json',
		cache : false,
		error : function(data) {
			console.log(data);
		},
		success : function(data) {
			console.log(data);
			var dataCode = data.code;
			if (dataCode == "SYS_S_000") {
				sessionStorage.setItem('regTel', $("#logBoxTel").val());
				sessionStorage.setItem("token",data.output.token);
				sessionStorage.setItem("userId",data.output.userId);
				window.open("orderdetail.html", "_self");
			}else{
				alert(data.desc);
			}
		}
	})
}

//密码必须为字母加数字且长度不小于6位
function testPassWord (password) {
	var re1=/^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,12}$/;
	if (password.val() != "") {
		if (re1.test(password.val())) {
			return true;
		}else{
			$(".errorDes").html("密码输入格式错误！");
        	return false;
		}
	}
}


function testTel ($tel) {
    var re=/^1[3|4|5|7|8|9][0-9]{9}$/;//电话号码
	if(re.test($tel.val())){
		return true;
	}else{
		$(".errorDes").html("手机号码输入有误！");
		return false;
	}
}
