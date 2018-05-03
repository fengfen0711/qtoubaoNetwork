
$(function() {
	//滑动
	scrollTop()
	
	//input
	inputTxt();
	
	//点击选中
	selectedImg ();
	
	//获取短信验证码
	authCode ();
	
	//点击跳转下一步
	selectToRegNext ();
	
	//点击注册
	selectToRegster (sessionStorage.getItem('regTel'),sessionStorage.getItem('regCode'));
	
	//点击登录
	selectToLogin ();
})
//滑动
function scrollTop() {
	var h = 136;
	var timer;
	var bClear = true;
	console.log(h)
	
//	obj.onclick = function(){
		timer = setInterval(function(){
			bClear = true;
			var scrolltop = document.documentElement.scrollTop || document.body.scrollTop;
			var iSpeed = Math.floor(-h/10);
			console.log(iSpeed)
			console.log(scrolltop)
			if(scrolltop >= h){
				clearInterval(timer);
			}
			document.documentElement.scrollTop = document.body.scrollTop = scrolltop - iSpeed;
		},50);
			
		window.onscroll = function(){
			if(!bClear){
				clearInterval(timer);
			}
			bClear = false;
		}
//	}
}

//input
function inputTxt() {
	$(".delX").on('mousedown',function(e) {
		$(this).parent().find("input").val("")
		$(this).parent().find("input").focus();
	})
	$(".input_grop input").on({
		input: function() {
			if($(this).val() != "") {
				$(this).parent().find("span.delX").css("display", "block");
			}
		},
		focus: function() {
			if($(this).val() != "") {
				$(this).parent().find("span.delX").css("display", "block");
			}
		}
	})
	$("#logBoxTel").blur(function() {
		setTimeout(function(athis) {
			$("#delX1").css("display", "none");
		}, 200)
		if ($("#logBoxTel").val() != "") {
			if (testTel($("#logBoxTel"))) {
				if (testPassWord($("#logBoxPass"))) {
					$(".logBoxErrorDes").css("display","none");
					$(".logBoxTitle").removeClass("logBoxTitle1");
					$("#logBox_logBtn").addClass("logBox_logBtn1");
					$("#logBox_logBtn").removeAttr("disabled");
				}else{
					$(".logBoxErrorDes").css("display","block");
					$(".logBoxTitle").addClass("logBoxTitle1");
					$("#logBox_logBtn").removeClass("logBox_logBtn1");
					$("#logBox_logBtn").attr("disabled","disabled");
				}
			}else{
				$(".logBoxErrorDes").css("display","block");
				$(".logBoxTitle").addClass("logBoxTitle1");
			}
		}
		if ($("#logBoxTel").val() == "" && $("#logBoxPass").val() == "") {
			$(".logBoxErrorDes").css("display","none");
			$(".logBoxTitle").removeClass("logBoxTitle1");
		}
	})
	$("#logBoxPass").blur(function() {
		setTimeout(function(athis) {
			$("#delX2").css("display", "none");
		}, 200)
		if (testPassWord($("#logBoxPass"))) {
			if ($("#logBoxTel").val() != "" && testTel($("#logBoxTel"))) {
				$(".logBoxErrorDes").css("display","none");
				$(".logBoxTitle").removeClass("logBoxTitle1");
				$("#logBox_logBtn").addClass("logBox_logBtn1");
				$("#logBox_logBtn").removeAttr("disabled");
			}else{
				$(".logBoxErrorDes").css("display","block");
				$(".logBoxTitle").addClass("logBoxTitle1");
				$("#logBox_logBtn").removeClass("logBox_logBtn1");
				$("#logBox_logBtn").attr("disabled","disabled");
			}
		}else{
			$(".logBoxErrorDes").css("display","block");
			$(".logBoxTitle").addClass("logBoxTitle1");
		}
		if ($("#logBoxTel").val() == "" && $("#logBoxPass").val() == "") {
			$(".logBoxErrorDes").css("display","none");
			$(".logBoxTitle").removeClass("logBoxTitle1");
		}
	})
	$("#regBoxTel").blur(function() {
		setTimeout(function(athis) {
			$("#delX4").css("display", "none");
		}, 200)
		if ($("#regBoxTel").val() != "") {
			if (testTel($("#regBoxTel"))) {
				if ($("#regBoxCode").val() != "") {
					if ($(".registerP").find("img").attr("src") == "img/selected.png") {
						$(".registerBox_nextBtn").addClass("logBox_logBtn1");
						$(".registerBox_nextBtn").removeAttr("disabled");
					}else{
						$(".registerBox_nextBtn").addClass("logBox_logBtn1");
						$(".registerBox_nextBtn").attr("disabled","disabled");
					}
				}
			}else{
				$(".logBoxErrorDes").css("display","block");
				$(".logBoxTitle").addClass("logBoxTitle1");
			}
		}
	})
	$("#regBoxCode").blur(function() {
		setTimeout(function(athis) {
			$("#delX3").css("display", "none");
		}, 200)
		if ($("#regBoxCode").val() != "") {
			if ($(".registerP").find("img").attr("src") == "img/selected.png") {
				if ($("#regBoxTel").val() != "" && testTel($("#regBoxTel"))) {
					$(".logBoxErrorDes").css("display","none");
					$(".logBoxTitle").removeClass("logBoxTitle1");
					$(".registerBox_nextBtn").addClass("logBox_logBtn1");
					$(".registerBox_nextBtn").removeAttr("disabled");
				}else{
					$(".logBoxErrorDes").css("display","block");
					$(".logBoxTitle").addClass("logBoxTitle1");
					$(".registerBox_nextBtn").removeClass("logBox_logBtn1");
					$(".registerBox_nextBtn").attr("disabled","disabled");
				}
			}
		}
	})
	$("#regBoxPas1").blur(function() {
		setTimeout(function(athis) {
			$("#delX5").css("display", "none");
		}, 200)
		if ($("#regBoxPas1").val() != "") {
			if (testPassWord($("#regBoxPas1"))) {
				if ($("#regBoxPas2").val() != "" && testPassWord1()) {
					$(".regBox2ErrorDes").css("display","none");
					$(".logBoxTitle").removeClass("logBoxTitle1");
					$(".registerBox_registerBtn").addClass("logBox_logBtn1");
					$(".registerBox_registerBtn").removeAttr("disabled");
				}else{
					$(".regBox2ErrorDes").css("display","block");
					$(".logBoxTitle").removeClass("logBoxTitle1");
					$(".registerBox_registerBtn").removeClass("logBox_logBtn1");
					$(".registerBox_registerBtn").attr("disabled","disabled");
				}
			}else{
				$(".regBox2ErrorDes").css("display","block");
				$(".logBoxTitle").removeClass("logBoxTitle1");
			}
		}
	})
	$("#regBoxPas2").blur(function() {
		setTimeout(function(athis) {
			$("#delX6").css("display", "none");
		}, 200)
		if ($("#regBoxPas2").val() != "") {
			if (testPassWord1()) {
				if ($("#regBoxPas1").val() != "" && testPassWord($("#regBoxPas1"))) {
					$(".regBox2ErrorDes").css("display","none");
					$(".logBoxTitle").removeClass("logBoxTitle1");
					$(".registerBox_registerBtn").addClass("logBox_logBtn1");
					$(".registerBox_registerBtn").removeAttr("disabled");
				}else{
					$(".regBox2ErrorDes").css("display","block");
					$(".logBoxTitle").removeClass("logBoxTitle1");
					$(".registerBox_registerBtn").removeClass("logBox_logBtn1");
					$(".registerBox_registerBtn").attr("disabled","disabled");
				}
			}else{
				$(".regBox2ErrorDes").css("display","block");
				$(".logBoxTitle").removeClass("logBoxTitle1");
			}
		}
	})
}


//点击选中
function selectedImg (){
	$(".registerP").click(function(){
		if ($(".registerP").find("img").attr("src") == "img/selected.png") {
			$(".registerP").find("img").attr("src","img/selectedNo.png");
		}else{
			$(".registerP").find("img").attr("src","img/selected.png");
		}
		if (($(".registerP").find("img").attr("src") == "img/selected.png") && $("#regBoxCode").val() != "" && testTel($("#regBoxTel"))) {
			$(".registerBox_nextBtn").addClass("logBox_logBtn1");
		}else{
			$(".registerBox_nextBtn").removeClass("logBox_logBtn1");
		}
	})
}

//获取短信验证码
function authCode () {
	$("#regBoxTel").val("");
	$("#regBoxCode").val("");
	
	$(".codeBtn").click(function () {
		if ($("#regBoxTel").val() != "") {
			if (testTel($("#regBoxTel"))) {
				var brokerTelInfo = {
					"brokerMobile":$("#regBoxTel").val()
				}
				var brokerTelN = JSON.stringify(brokerTelInfo);
				brokerTel (brokerTelN);
			}
		}else{
			alert("请填写手机号码！");
			$("#regBoxTel").focus();
			
		}
	})
}

//手机号是否在经代核心存在
function brokerTel (tel) {
	$.ajax({
		type : 'post',
		url : URL1 + 'query_broker_mobile_jsons.tml',
		data : tel,
		dataType : 'json',
		cache : false,
		error : function(data) {
			console.log(data);
		},
		success : function(data) {
			console.log(data);
			var dataCode = data.code;
			if (dataCode == "SYS_S_000") {
				var mobileInfo = {
					"groupCode":"",
					"sceneCode":"registerSms",
					"exSeq":"",
					"exSystem":"",
					"sendWhen":"",
					"mobile":$("#regBoxTel").val(),
					"param":{
					}
				}
				var mobile = JSON.stringify(mobileInfo);
				getCode (mobile);
				//倒计时
				var countdown = 60;
				var codeBtn = document.getElementById("codeBtn");
				function settime(obj) { 
				    if (countdown == 0) { 
				        $("#codeBtn").removeClass("codeBtn1");
				        obj.removeAttribute("disabled"); 
				        obj.innerHTML = "获取验证码"; 
				        countdown = 60; 
				        return;
				    } else { 
						$("#codeBtn").addClass("codeBtn1");
				        obj.setAttribute("disabled", true); 
				        obj.innerHTML = "重新发送" + countdown + "s"; 
				        countdown--; 
				    } 
					setTimeout(function() { 
				    	settime(obj) }
				    ,1000) 
				}
				settime(codeBtn);
			}else{
				alert(data.desc);
			}
		}
	})
}

//获取验证码
function getCode (mobile) {
	$.ajax({
		type : 'post',
		url : URL1 + 'send_code_sms_jsons.tml',
		data : mobile,
		dataType : 'json',
		cache : false,
		error : function(data) {
			console.log(data);
		},
		success : function(data) {
			console.log(data);
		}
	})
}

//点击跳转下一步
function selectToRegNext () {
	$(".registerBox_nextBtn").click(function(){
		var telCodeInfo = {
			"mobile":$("#regBoxTel").val(),
			"exSystem":"",
			"code":$("#regBoxCode").val()
		}
		var telCode = JSON.stringify(telCodeInfo);
		isAuthCode (telCode);
	})
}

//手机验证码是否正确
function isAuthCode (telCode) {
	$.ajax({
		type : 'post',
		url : URL1 + 'verify_code_sms_jsons.tml',
		data : telCode,
		dataType : 'json',
		cache : false,
		error : function(data) {
			console.log(data);
		},
		success : function(data) {
			console.log(data);
			var dataCode = data.code;
			if (dataCode == "SYS_S_000") {
				sessionStorage.setItem('regTel', $("#regBoxTel").val());
				sessionStorage.setItem('regCode', $("#regBoxCode").val());
				
				$("#registerBox1").removeClass("disblock");
				$("#registerBox2").addClass("disblock");
			}else{
				alert(data.desc);
			}
		}
	})
}

//点击注册
function selectToRegster () {
	$(".registerBox_registerBtn").click(function(){
		var registerInfo = {
			"loginNme": sessionStorage.getItem('regTel'),
			"loginType": "B",
			"code": sessionStorage.getItem('regCode'),
			"loginPwd": $("#regBoxPas1").val()
		}
		var register = JSON.stringify(registerInfo);
		registerAjax (register);
	})
}

//注册接口
function registerAjax (register) {
	$.ajax({
		type : 'post',
		url : URL1 + 'register_jsons.tml',
		data : register,
		dataType : 'json',
		cache : false,
		error : function(data) {
			console.log(data);
		},
		success : function(data) {
			console.log(data);
			var dataCode = data.code;
			if (dataCode == "SYS_S_000") {
				$(".logBoxW_registerBtn").html("立即注册")
				$("#loginBox").removeClass("roundZ")
				$("#registerBox").removeClass("roundZ1")
				$("#registerBox").addClass("roundZ")
				$("#loginBox").addClass("roundZ1")
				$("#logBoxTel").val(sessionStorage.getItem('regTel'));
			}else{
				alert(data.desc);
			}
		}
	})
}

//点击登录
function selectToLogin () {
	$("#logBox_logBtn").click(function(){	
		var loginInfo = {
			"loginNme": $("#logBoxTel").val(),
			"loginType": "B",
			"loginPwd": $("#logBoxPass").val()
		}
		var login = JSON.stringify(loginInfo);
		loginAjax (login);
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
			$(".logBoxErrorDes").html("密码输入格式错误~");
			$(".regBox2ErrorDes").html("密码输入格式错误~");
        	return false;
		}
	}
}

//确认密码
function testPassWord1 () {
   	if ($("#regBoxPas2").val() != "" && $("#regBoxPas1").val() != "") {
	   	if ($("#regBoxPas2").val() == $("#regBoxPas1").val()) {
	   		return true;
	    }else{
			$(".regBox2ErrorDes").html("两次密码不一致~");
	        return false;
	    }
   	}
}



function testTel ($tel) {
    var re=/^1[3|4|5|7|8|9][0-9]{9}$/;//电话号码
	if(re.test($tel.val())){
		return true;
	}else{
		$(".logBoxErrorDes").html("手机号码输入有误~");
		return false;
	}
}


