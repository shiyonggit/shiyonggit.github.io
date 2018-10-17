(function(){
	var box = null;
	var option = {
		week:['日','一',"二",'三','四','五','六']
	}
	
	var num = 0;
	
	function calendar(){
		
		box = $('<div class="box"><div>');
		var str = '<div class="prev">&lt;</div>'+
				   '<div class="next">&gt;</div>'+
				   '<h3>'+time()+'</h3>';
				 	
		box.html(str);
		this.append(box);
		
		
		// 调用生成星期的函数
		createWeek();
		
		
		// 调用生成日期的函数
		creatrDate(0);
		
		// 调用切换时间的函数
		changedTime();
		
	}
	
	function time(){
		var date = new Date();
		var y = date.getFullYear();
		var mon = date.getMonth()+1;
		return y+'年'+mon+'月';
	}
	
	// 写一个生成星期的函数
	function createWeek(){
		
		var day = $('<div class="day"></div>');
		for(var i=0;i<option.week.length;i++){
			var span = $('<span>'+option.week[i]+'</span>');
			day.append(span)
		}
		box.append(day)	
	}
	
	// 创建日期的函数
	function creatrDate(num){
		
		var riLi = $('<div class="ri"></div>');
		var str = '';
		
		
		
		
		// 当前月的1号是星期几
		var date = new Date();
		date.setMonth(date.getMonth()+num);
		date.setDate(1);
		// 获取星期
		var week = date.getDay();
		
		// 获取上个月的最后一天
		var date = new Date();
		date.setMonth(date.getMonth()+num);
		date.setDate(0)  // 设置成当前月的0号，获取的是上个月的最后一天
		var last = date.getDate();		
		for(var i=(last-week);i<last;i++){ // 30  
			str += '<li class="last">'+(i+1)+'</li>';
		}
		
		
		
		// 获取当前的月份
		var date = new Date();  // 2018 10 16    2018-11 16   2018-11-0=2018-10-31  
		date.setMonth(date.getMonth()+num);
		var newDate = date.getDate();
		date.setMonth(date.getMonth()+1);
		date.setDate(0);
		// 重新设置h3标签里面的值
		box.find('h3').html(date.getFullYear()+'年'+(date.getMonth()+1)+'月');
		
		
		// 当前月的天数
		var newDay = date.getDate();
		
		// 设置当前月份的天数
		for(var i=0;i<newDay;i++){
			if(i == (newDate-1)){
				str += '<li class="active">'+(i+1)+'</li>';
			}else{
				str += '<li>'+(i+1)+'</li>';
			}
			
		}
				
		
		// 生成下个月的天数
		var len = 42 - newDay - week;
		for(var i=0;i<len;i++){
			str +='<li class="last">'+(i+1)+'</li>';
		}
		
		
		riLi.html('<ul>'+str+'</ul>');
		box.append(riLi);	
		
	}
	
	// 点击有切换效果的函数
	function changedTime(){
		var prev = box.find('.prev');
		var next = box.find('.next');
		
		prev.on('click',function(){
			box.find('.ri').remove();
			num--;
			creatrDate(num);
		})
		
		next.on('click',function(){
			box.find('.ri').remove();
			num++;
			creatrDate(num);
		})
	}
	
	
	
	
	$.fn.extend({
		calendar:calendar
	})
})($)
