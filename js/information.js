$(function(){
	$('.navBoxZ1').load('com.html #header',function(){
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
		function quitAjax (data) {
			$.ajax({
				type : 'post',
				url : URL1 + 'sso/dologout',
				data : data,
				contentType: 'application/json',
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
		
		$('.one').removeClass('selectedLi ')
		$('.one').find("span.borderBottom").removeClass("selectedBorderBottom");
		$('.two1').addClass('selectedLi')
		$('.two1').find("span.borderBottom").addClass("selectedBorderBottom");
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
	$('.footerZ').load('com.html #footer',function(){
	
	})
	$('.button').on('click',function(){
		if(nameblur()==true&&cardBlur()==true&&phoneBlur()==true&&emailBlur()==true&&nameblur1()==true&&cardBlur1()==true&&phoneBlur1()==true&&addresBlur()==true){
			sendData()
		}
	})
	function nameblur(){
		var name=$('.name').val();
	    if(name==""){
	        alert("投保人姓名不能为空，请输入您的姓名");
	        return false;
	    }
	    if(name.length>5){
	        alert("投保人姓名格式为10个字以内");
	        return false;
	    }
	    return true;
	}
	function nameblur1(){
		var name=$('.name1').val();
	    if(name==""){
	        alert("被保人姓名不能为空，请输入您的姓名");
	        return false;
	    }
	    if(name.length>5){
	        alert("被保人姓名格式为10个字以内");
	        return false;
	    }
	    return true;
	}
	function cardBlur(){
		var name=$('.idcard').val();
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	    if(name==""){
	        alert("投保人身份证不能为空");
	        return false;
	    }
	    if(reg.test(name)==false){
	        alert("投保人身份证格式不正确，请输入正确的身份证号码");
	        return false;
	    }
	    return true;
	}
	function cardBlur1(){
		var name=$('.idcard1').val();
		var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
	    if(name==""){
	        alert("被保人身份证不能为空");
	        return false;
	    }
	    if(reg.test(name)==false){
	        alert("被保人身份证格式不正确，请输入正确的身份证号码");
	        return false;
	    }
	    return true;
	}
	function phoneBlur(){
		var name=$('.phone').val();
		var reg=/^(13|14|15|17|19|18)\d{9}$/;
	    if(name==""){
	        alert("投保人手机号不能为空");
	        return false;
	    }
	    if(reg.test(name)==false){
	        alert("手机号码格式不正确，请输入正确的手机号码");
	        return false;
	    }
	    return true;
	}
	function phoneBlur1(){
		var name=$('.phone1').val();
		var reg=/^(13|14|15|17|19|18)\d{9}$/;
	    if(name==""){
	        alert("投保人手机号不能为空");
	        return false;
	    }
	    if(reg.test(name)==false){
	        alert("手机号码格式不正确，请输入正确的手机号码");
	        return false;
	    }
	    return true;
	}
	function emailBlur(){
		var name=$('.email').val();
		var reg=/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/;
	    if(name==""){
	        alert("邮箱不能为空");
	        return false;
	    }
	    if(reg.test(name)==false){
	        alert("邮箱格式不正确，请输入正确格式的邮箱");
	        return false;
	    }
	    return true;
	}
	function addresBlur(){
		var name=$('.addres').val();
		if(name==""){
	        alert("目的地不能为空");
	        return false;
	    }
		return true;
	}
	function sendData(){
		var oDate = new Date();
		var str={
		  "acertificatesType":$('.type').html(),
		  "adress": $('.addres').val(),
		  "aemail": $('.email').val(),
		  "aidCard": $('.idcard').val(),
		  "ainsureName": $('.name').val(),
		  "amobile": $('.phone').val(),
		  "bcertificatesType": $('.type1').html(),
		  "beginTime": $('.begin').val(),
		  "bidCard": $('.idcard1').val(),
		  "binsureName": $('.name1').val(),
		  "bmobile": $('.phone1').val(),
		  "destination": $('.addres').val(),
		  "endTime": $('.end').val(),
		  "prodName":"超值旅游险",
		  "orderType":"0",
		  "orderDate":oDate.getTime(),
		  "premium":sessionStorage.getItem("intotalHtml"),
		  "orderCode":window.sessionStorage.userId
		}
		console.log($('.end').val())
		var data=JSON.stringify(str)
		console.log(data)
		$.ajax({
			url: URL1 + 'cnt/order/save',
			type:"POST",
			data:data,
			contentType: 'application/json',
			success:function(res){
				if(res.code="SYS_S_000"){
					window.location.href="success.html"
					sessionStorage.removeItem("intotalHtml")
				}
			},
			error:function(){
				console.log('发送失败')
			}
		})
	}
	
	function tab(date1,date2){
	    var oDate1 = new Date(date1);
	    var oDate2 = new Date(date2);
	    if(oDate1.getTime() > oDate2.getTime()){
	        var time1 = oDate1.getTime() - oDate2.getTime()
	        var time11 = Math.floor(time1/86400000)+1
	        console.log(time11)
	        return time11;
	    } else {
	        var time2 = oDate2.getTime() - oDate1.getTime()
	        var time22 = Math.floor(time2/86400000)+1
	        console.log(time22)
	        return time22;
	    }
	}
	$(".begin").change(function(){
		if ($(".begin").val() != "" && $(".end").val() != "") {
			var intotalHtml = tab($(".begin").val(),$(".end").val());
			$(".intotal").html(intotalHtml)
			sessionStorage.setItem("intotalHtml",intotalHtml)
		}
	})
	$(".end").change(function(){
		if ($(".begin").val() != "" && $(".end").val() != "") {
			var intotalHtml = tab($(".begin").val(),$(".end").val());
			$(".intotal").html(intotalHtml)
			sessionStorage.setItem("intotalHtml",intotalHtml)
		}
	})
	
})