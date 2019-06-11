		var	oBox=document.getElementsByClassName('lunbo')[0];
		var oBul=document.getElementById('Broadcast');
		var aBli=oBul.getElementsByClassName('broadcast-img'); 
		var oPrve=document.getElementById('banner-tab-prve');
		var oNext=document.getElementById('banner-tab-next');
		var num=0;

		for(var i=0;i<aBli.length;i++)
		{
			aBli[i].style.opacity="0";
		}
		aBli[0].style.opacity="1";

		oBox.onmouseover=function()
		{
			clearInterval(timer);
		}
		oBox.onmouseout=function()
		{
			timer = setInterval(broadcast,3000);
		}

		timer = setInterval(broadcast,3000);
		function broadcast()
		{
			num++;
			if(num>=aBli.length){num=0;}
			changeImg();
			return false;
		}
		oPrve.onclick=function()
		{
			num--;
			if(num == -1){num=aBli.length - 1;}
			changeImg();
			return false;
		}
		oNext.onclick=function()
		{
			num++;
			if(num == aBli.length){num=0;}
			changeImg();
			return false;
		}
		function changeImg()
		{
			for(var i=1;i<aBli.length;i++)
			{
				aBli[i].style.opacity="0";
			}
			aBli[num].style.opacity="1";
			aBli[num].style.transition="opacity 2s";
		}

		/* var oDiv=document.getElementsByClassName('Work-review')[0];
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var oUl=oDiv.getElementsByTagName('ul')[1];
		var time=0;
		var k=0;
		setInterval(function()
		{
			if(k>4)
			{
				k=0;
			}
			else
			{
				oUl.style.marginTop=(-25)*k+"px";
				k++;
			}
		},1000); */
		var oDiv=document.getElementsByClassName('Work-review')[0];
		var oUl=oDiv.getElementsByTagName('ul')[0];
		var oUl2=oDiv.getElementsByTagName('ul')[1];
		roll(50);
		function roll(t) {
            oUl2.innerHTML = oUl.innerHTML;
            oDiv.scrollTop = 0;
            var timer = setInterval(rollStart, t);
            oDiv.onmouseover = function () {
                clearInterval(timer)
            }
            oDiv.onmouseout = function () {
                timer = setInterval(rollStart, t);
            }
        }
        function rollStart() {
            if(oDiv.scrollTop >= oUl.scrollHeight) {
                oDiv.scrollTop = 0;
            } else {
                oDiv.scrollTop++;
            }
        }
