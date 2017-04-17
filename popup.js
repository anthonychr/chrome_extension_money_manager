$(function(){
	$('#spendAmount').click(function(){
		chrome.storage.sync.get('total', function(budget){
			var newTotal = 0;
			if(budget.total){
				parseInt(newTotal += budget.total);
			}

			var amount = $('#amount').val();
			if(amount){
				parseInt(newTotal += amount);
			}	

			chrome.storage.sync.set({'total': newTotal});

			$('#total').text(newTotal);
			$('#amount').val('');
		});
		console.log(newTotal, budget,amount);
	});
});