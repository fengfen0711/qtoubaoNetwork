$(function(){
	var percent_data = {
		"userId": "123",
	}
	var percent_data = JSON.stringify(percent_data);
	$.ajax({
		type: 'post',
		url: URL1 + 'query_personal_info_jsons.tml',
		data: percent_data,
		contentType: 'application/json',
		dataType: 'json',
		cache: false,
		success: function(data) {
			console.log(data);
			if(data.code == "SYS_S_000") {
				$("#real_name").val(data.output.userName);
				
				if(data.output.credentType=="A"){
					$("#real_type").val("身份证号");
				}
				
				$("#rel_num").val(data.output.credentNumber);
				$("#real_home").val(data.output.cardRegion);
				$("#real_detail").val(data.output.cardRegion);
			}

		},
		error: function(data) {
			console.log(data);
		}
	})
})


function my_order(){
	window.location.href="orderdetail.html";
}
