var IP = 'http://101.200.57.188:8088/YXWeb';
var imgIp = 'http://101.200.57.188:8888/';
//弹窗
function Toast(msg, duration) { 
	duration = isNaN(duration) ? 3000 : duration;
	var html = "<div class='toast'  id='bb' >" + msg + "</div>"
	$("body").append(html)
	setTimeout(function() {
		var d = 0.5;
		$("#bb").addClass('toastT');
		setTimeout(function() {
			$("#bb").remove();
		}, d * 1000);
	}, duration);
}

//年龄
function ages(str) {
	var r = str.match(/^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2})$/);
	if (r == null)
		return false;
	var d = new Date(r[1], r[3] - 1, r[4]);
	if (d.getFullYear() == r[1] && (d.getMonth() + 1) == r[3] && d.getDate() == r[4]) {
		var Y = new Date().getFullYear();
		return ((Y - r[1]));
	}
	return ("输入的日期格式错误！");
}

//计算两个日期的天数
function DateDiff(sDate1, sDate2) {
	var aDate, oDate1, oDate2, iDays;
	var systemType = api.systemType;
	//转换为12-18-2006格式
	if (systemType == 'ios') {
		aDate = sDate1.split("-");
		oDate1 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);
		aDate = sDate2.split("-");
		oDate2 = new Date(aDate[1] + '/' + aDate[2] + '/' + aDate[0]);

	} else if (systemType == 'android') {
		aDate = sDate1.split("-");
		oDate1 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
		aDate = sDate2.split("-");
		oDate2 = new Date(aDate[1] + '-' + aDate[2] + '-' + aDate[0]);
	}
	iDays = parseInt((oDate2 - oDate1 ) / 1000 / 60 / 60 / 24);
	//把相差的毫秒数转换为天数
	return iDays;
}

//获取当前日期
function getNowFormatDate() {
	var date = new Date();
	var seperator1 = "-";
	var seperator2 = ":";
	var month = date.getMonth() + 1;
	var strDate = date.getDate();
	if (month >= 1 && month <= 9) {
		month = "0" + month;
	}
	if (strDate >= 0 && strDate <= 9) {
		strDate = "0" + strDate;
	}
	var currentdate = date.getFullYear() + seperator1 + month + seperator1 + strDate + " " + date.getHours() + seperator2 + date.getMinutes() + seperator2 + date.getSeconds();
	return currentdate.substring(0, 10);
}