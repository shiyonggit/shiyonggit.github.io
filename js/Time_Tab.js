(function($){
	var box = document.getElementsByClassName('box')[0];
	function tab(){
		creat();
	}
	function creat(){
		
		var html = '<div class=''prev''>'+&lt+'</div><div class=''next''>'+&gt+'</div>';
		box.append(html)
	}
	function creatday(){
		var html = '<div class="day">'
				'<span>日</span><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span>'
			'</div>'
			
	}
	$.fn.extend({
		tab:tab
	})
})($)


$('.box').tab()
