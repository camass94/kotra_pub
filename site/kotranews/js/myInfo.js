;(function($) {
	'use strict';
	var myInfoWrap = $('.js-myInfo');
	var tab1 = myInfoWrap.find('li').eq(0), tab2 = myInfoWrap.find('li').eq(1);
	var saveBtn = myInfoWrap.find('.save');

	//tab1
	var tbody = tab1.find('.tbl tbody');
	var tr = '<tr>'+tab1.find('.js-tempTr').html()+'</tr>';
	var btnAdd = tab1.find('.myInfo_area .add'), btnDel = tab1.find('.myInfo_area .del');
	btnAdd.on('click', function() {
		//if(tbody.find('tr').size()>=5) return false;
		tbody.append(tr);
	});
	btnDel.on('click', function() {
		if(!tbody.find('input:checkbox').is(':checked')) alert('삭제하실 지역을 선택해 주세요.');
		tbody.find('input:checkbox').each(function() {
			var chkTr = $(this).parents('tr');
			if($(this).is(':checked')) {
				chkTr.remove();
			}
		});
			
	});
	var chkAll = $('.js-chkAll');
	chkAll.on('click', function() {
		var flag = $(this).hasClass('active');
		
		$(this).toggleClass('active');
		tbody.find('input:checkbox').each(function() {
			var op = {'checked': (flag)?false:true}
			$(this).prop(op).attr(op);
		});
	});

	//tab2
	tab2.find('.label').on('click', function () {
		var input = $(this).find('input');
		var flag = input.is(':checked');
		var op = {'checked': (flag)?false:true}
		input.prop(op).attr(op);
		if(flag) {
			$(this).removeClass('on');
		} else {
			$(this).addClass('on')
		}
	});

	//저장하기
	var myInfo = saveBtn.on('click', function() {
		var myInfo_area_idx = tbody.find('input:checkbox').filter(':checked').size();
		if(myInfo_area_idx>=5) return alert('관심지역은 5개까지 선택 가능합니다.');
		var myInfo_industry = tab2.find('.label').map(function() {
			var arr = [];
			if($(this).find('input').is(':checked')) arr.push($(this).find('input'));
			return arr;
		});
		myInfoWrap.find('.close').trigger('click');
	});

	//팝업창이 닫히면 tab1이 on 될수 있게 set
	myInfoWrap.find('.close').on('click', function() {tab1.find('.tab-tit').trigger('click');});
})(jQuery);