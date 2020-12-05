$(function(){
			var slideHienTai=1;//cái slide sẽ được hiện thị ngay khi ấn nút
			var slideFirst=$('.wrap4itemPlayStay').first();
			var slideLastest=$('.wrap4itemPlayStay').last();
			$('.next').click(function(envent){										
				if(slideHienTai===4){
					slideLastest.addClass('bien_mat_sang_trai').one('webkitAnimationEnd',function(envent){
						$('.bien_mat_sang_trai').removeClass('bien_mat_sang_trai');
						
					});
					slideFirst.addClass('di_vao_tu_ben_phai').one('webkitAnimationEnd',function(){
						$('.itemPlayStayActive').removeClass('itemPlayStayActive');
						$('.di_vao_tu_ben_phai').addClass('itemPlayStayActive').removeClass('di_vao_tu_ben_phai');
						
					});
				}
				else{
					let slideSau=$('.itemPlayStayActive').next();
					$('.itemPlayStayActive').addClass('bien_mat_sang_trai').one('webkitAnimationEnd',function(envent){
						$('.bien_mat_sang_trai').removeClass('bien_mat_sang_trai');	
					});
					slideSau.addClass('di_vao_tu_ben_phai').one('webkitAnimationEnd',function(){
						//bỏ class itemPlayStayActive của slide vừa biến mắt sang trái
						$('.itemPlayStayActive').removeClass('itemPlayStayActive');
						//cho slide mới đi từ phải vào class itemPlayStayActive
						$('.di_vao_tu_ben_phai').addClass('itemPlayStayActive').removeClass('di_vao_tu_ben_phai');
						
					});
				}
				slideHienTai=slideHienTai+1;
				if(slideHienTai===5){
					slideHienTai=1;
				}
				
			});
			$('.prev').click(function(envent){
				
				if(slideHienTai===1){
					slideLastest.addClass('di_vao_tu_ben_trai').one('webkitAnimationEnd',function(){
						$('.itemPlayStayActive').removeClass('itemPlayStayActive');
						$('.di_vao_tu_ben_trai').addClass('itemPlayStayActive').removeClass('di_vao_tu_ben_trai');
						
					});
					slideFirst.addClass('bien_mat_sang_phai').one('webkitAnimationEnd',function(envent){
						$('.bien_mat_sang_phai').removeClass('bien_mat_sang_phai');
						
					});
				}
				else{
					let slideTruoc=$('.itemPlayStayActive').prev();				
					$('.itemPlayStayActive').addClass('bien_mat_sang_phai').one('webkitAnimationEnd',function(envent){
						$('.bien_mat_sang_phai').removeClass('bien_mat_sang_phai');	
					});
					slideTruoc.addClass('di_vao_tu_ben_trai').one('webkitAnimationEnd',function(){
						//bỏ class itemPlayStayActive của slide vừa biến mắt sang trái
						$('.itemPlayStayActive').removeClass('itemPlayStayActive');
						//cho slide mới đi từ phải vào class itemPlayStayActive
						$('.di_vao_tu_ben_trai').addClass('itemPlayStayActive').removeClass('di_vao_tu_ben_trai');
						
					});
				}
				slideHienTai=slideHienTai-1;
				if(slideHienTai===0){	
					slideHienTai=4;
				}
			});


});