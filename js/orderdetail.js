$(function() {
	$("order_all").css("color", "#ff5d65");
	$(".order_all1").css("color", "#222222");
	$(".order_all2").css("color", "#222222");
	$(".order_title input").click(function(){
		$(this).css("color", "#ff5d65");
		$(this).siblings().css("color", "#222222");
	})
			
			var order_data = {
				"orderType": "0",
				"page": "0",
				"size": "10000",
				"orderCode":window.sessionStorage.userId
			};
			var order_data = JSON.stringify(order_data);
			console.log(order_data)
			$.ajax({
				type: 'post',
				url: URL1 + 'cnt/order/page',
				data: order_data,
				dataType: 'json',
				contentType: 'application/json',
				cache: false,
				success: function(data) {
					console.log(data);
					if(data.code == "SYS_S_000") {
						var str = "";
						for(var i = 0; i < data.output.data.length; i++) {
							
							str += '<div class="orderlist" code='+data.output.data[i].id+'><div class="order_intel">';
							str += '<div class="order_title_first">';
							str += '<label class="order_bao order_kill">订单编号:'+data.output.data[i].id+' </label>';
							str += '<label class="order_bao order_time">'+data.output.data[i].orderDate+' </label>';
							str += '</div>';
							str += '<div class="order_list">';
							str += '<div class="order_div">';
							str += '<img class="order_img" src="img/bg101.jpg" />';
							str += '<div class="order_span">';
							str += '<p class="order_p_bao">'+data.output.data[i].prodName+' </p>';
							str += '<p class="order_name">投保人:'+data.output.data[i].aInsureName+' </p>';
							str += '<p class="order_name1">被保人:'+data.output.data[i].bInsureName +'</p>';
							str += '	</div>';
							str += '<div class="order_span">';
							str + '<p class="order_star">起：'+data.output.data[i].beginTime+' </p>';
							str + '<p class="order_star">止：'+data.output.data[i].endTime+'</p>';
							str + '</div>';
							str + '<div class="order_span1">';
							str + '<p class="order_star1">&yen;'+data.output.data[i].premium+' </p>';
							str + '</div>';
							str + '<div class="order_span1">';
							str += '<p class="order_star1">&yen;'+data.output.data[i].premium+' </p>';
							str += '</div>';
							str += '<div class="order_span">';
							if(data.output.data[i].orderType==0){
								str += '<p class="order_p_close">待支付</p>';	
							}else{
								str += '<p class="order_p_close">已关闭</p>';	
							}
							str += '<p class="order_name_detail">订单详情</p>';
							str + '<p class="order_name_buy">再次购买</p>';
							str += '</div>';
							str += '</div>';
							str += '</div>';
							str += '</div></div>';
							
						}
						console.log(str)
						$(".order_content").html(str);
						$('.orderlist').on('click',function(){
							var id=$(this).attr('code')
							window.location.href="order.html?id="+id
						})
					}

				},
				error: function(data) {
					console.log(data);
				}
			});
		})

			$(".order_all").on('click', function() {
				
				var order_data = {
					"orderType": "0",
					"page": "0",
					"size": "10000",
					"orderCode":window.sessionStorage.userId

				};
				var order_data = JSON.stringify(order_data);
				console.log(order_data)
				$.ajax({
					type: 'post',
					url: URL1 + 'cnt/order/page',
					data: order_data,
					dataType: 'json',
					contentType: 'application/json',
					cache: false,
					success: function(data) {
						console.log(data);
						if(data.code == "SYS_S_000") {
							var str = "";
							for(var i = 0; i < data.output.data.length; i++) {
								str += '<div class="orderlist" code='+data.output.data[i].id+'><div class="order_intel">';
							str += '<div class="order_title_first">';
							str += '<label class="order_bao order_kill">订单编号:'+data.output.data[i].id+' </label>';
							str += '<label class="order_bao order_time">'+data.output.data[i].orderDate+' </label>';
							str += '</div>';
							str += '<div class="order_list">';
							str += '<div class="order_div">';
							str += '<img class="order_img" src="img/bg101.jpg" />';
							str += '<div class="order_span">';
							str += '<p class="order_p_bao">'+data.output.data[i].prodName+' </p>';
							str += '<p class="order_name">投保人:'+data.output.data[i].aInsureName+' </p>';
							str += '<p class="order_name1">被保人:'+data.output.data[i].bInsureName +'</p>';
							str += '	</div>';
							str += '<div class="order_span">';
							str + '<p class="order_star">起：'+data.output.data[i].beginTime+' </p>';
							str + '<p class="order_star">止：'+data.output.data[i].endTime+'</p>';
							str + '</div>';
							str + '<div class="order_span1">';
							str + '<p class="order_star1">&yen;'+data.output.data[i].premium+' </p>';
							str + '</div>';
							str + '<div class="order_span1">';
							str += '<p class="order_star1">&yen;'+data.output.data[i].premium+' </p>';
							str += '</div>';
							str += '<div class="order_span">';
							if(data.output.data[i].orderType==0){
								str += '<p class="order_p_close">待支付</p>';	
							}else{
								str += '<p class="order_p_close">已关闭</p>';	
							}
							str += '<p class="order_name_detail">订单详情</p>';
							str + '<p class="order_name_buy">再次购买</p>';
							str += '</div>';
							str += '</div>';
							str += '</div>';
							str += '</div></div>';
								

							}
							$(".order_content").html(str);
						}

					},
					error: function(data) {
						console.log(data);
					}
				});
			})

			$(".order_all1").on('click', function() {
			
				var order_data = {
					"orderType": "0",
					"page": "0",
					"size": "10000",
					"orderCode":window.sessionStorage.userId

				};
				var order_data = JSON.stringify(order_data);
				console.log(order_data)
				$.ajax({
					type: 'post',
					url: URL1 + 'cnt/order/page',
					data: order_data,
					dataType: 'json',
					contentType: 'application/json',
					cache: false,
					success: function(data) {
						console.log(data);
						if(data.code == "SYS_S_000") {
							var str = "";
							for(var i = 0; i < data.output.data.length; i++) {
							str += '<div class="orderlist" code='+data.output.data[i].id+'><div class="order_intel">';
							str += '<div class="order_title_first">';
							str += '<label class="order_bao order_kill">订单编号:'+data.output.data[i].id+' </label>';
							str += '<label class="order_bao order_time">'+data.output.data[i].orderDate+' </label>';
							str += '</div>';
							str += '<div class="order_list">';
							str += '<div class="order_div">';
							str += '<img class="order_img" src="img/bg101.jpg" />';
							str += '<div class="order_span">';
							str += '<p class="order_p_bao">'+data.output.data[i].prodName+' </p>';
							str += '<p class="order_name">投保人:'+data.output.data[i].aInsureName+' </p>';
							str += '<p class="order_name1">被保人:'+data.output.data[i].bInsureName +'</p>';
							str += '	</div>';
							str += '<div class="order_span">';
							str + '<p class="order_star">起：'+data.output.data[i].beginTime+' </p>';
							str + '<p class="order_star">止：'+data.output.data[i].endTime+'</p>';
							str + '</div>';
							str + '<div class="order_span1">';
							str + '<p class="order_star1">&yen;'+data.output.data[i].premium+' </p>';
							str + '</div>';
							str + '<div class="order_span1">';
							str += '<p class="order_star1">&yen;'+data.output.data[i].premium+' </p>';
							str += '</div>';
							str += '<div class="order_span">';
							if(data.output.data[i].orderType==0){
								str += '<p class="order_p_close">待支付</p>';	
							}else{
								str += '<p class="order_p_close">已关闭</p>';	
							}
							str += '<p class="order_name_detail">订单详情</p>';
							str + '<p class="order_name_buy">再次购买</p>';
							str += '</div>';
							str += '</div>';
							str += '</div>';
							str += '</div></div>';

							}
							$(".order_content").html(str);
						}

					},
					error: function(data) {
						console.log(data);
					}
				});
			})
			$(".order_all2").on('click', function() {
				var order_data = {
					"orderType": "2",
					"page": "1",
					"size": "1",
					"orderCode":window.sessionStorage.userId
				};
				var order_data = JSON.stringify(order_data);
				console.log(order_data)
				$.ajax({
					type: 'post',
					url: URL1 + 'cnt/order/page',
					data: order_data,
					dataType: 'json',
					contentType: 'application/json',
					cache: false,
					success: function(data) {
						console.log(data);
						if(data.code == "SYS_S_000") {
							var str = "";
							for(var i = 0; i < data.output.data.length; i++) {
								str += '<div class="orderlist" code='+data.output.data[i].id+'><div class="order_intel">';
							str += '<div class="order_title_first">';
							str += '<label class="order_bao order_kill">订单编号:'+data.output.data[i].id+' </label>';
							str += '<label class="order_bao order_time">'+data.output.data[i].orderDate+' </label>';
							str += '</div>';
							str += '<div class="order_list">';
							str += '<div class="order_div">';
							str += '<img class="order_img" src="img/bg101.jpg" />';
							str += '<div class="order_span">';
							str += '<p class="order_p_bao">'+data.output.data[i].prodName+' </p>';
							str += '<p class="order_name">投保人:'+data.output.data[i].aInsureName+' </p>';
							str += '<p class="order_name1">被保人:'+data.output.data[i].bInsureName +'</p>';
							str += '	</div>';
							str += '<div class="order_span">';
							str + '<p class="order_star">起：'+data.output.data[i].beginTime+' </p>';
							str + '<p class="order_star">止：'+data.output.data[i].endTime+'</p>';
							str + '</div>';
							str + '<div class="order_span1">';
							str + '<p class="order_star1">&yen;'+data.output.data[i].premium+' </p>';
							str + '</div>';
							str + '<div class="order_span1">';
							str += '<p class="order_star1">&yen;'+data.output.data[i].premium+' </p>';
							str += '</div>';
							str += '<div class="order_span">';
							if(data.output.data[i].orderType==0){
								str += '<p class="order_p_close">待支付</p>';	
							}else{
								str += '<p class="order_p_close">已关闭</p>';	
							}
							str += '<p class="order_name_detail">订单详情</p>';
							str + '<p class="order_name_buy">再次购买</p>';
							str += '</div>';
							str += '</div>';
							str += '</div>';
							str += '</div></div>';
								

							}
							$(".order_content").html(str);
						}

					},
					error: function(data) {
						console.log(data);
					}
				});
			})
			

function my_message(){
	window.location.href="percent_center.html";
}
