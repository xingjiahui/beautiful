/*!
 * donate_system v1.0.2
 * autho XJHui
 * url https://xingjiahui.top
 * (c) 2020-2020 xCss
 * Released under the GPL-2.0 License.
 * Last Update: 2020/6/1 下午14:44:24:
 */
$.get("https://donate.xingjiahui.top/getJsonData.php",function getData(data){var donationInfo=JSON.parse(data);
var donate_tbody=$("table")[0];var temp='<tr><td align="center"><a href="{url}" target="_blank" rel="noopener">{name}</a></td><td align="center">{pay_way}</td><td align="center">{userdonate}</td><td align="center">{donate_out}</td></tr>';
var STR="<tbody>";for(var i=0;i<donationInfo.length;
i++){var str=temp.replace("{url}",donationInfo[i].user_url).replace("{name}",donationInfo[i].user_name).replace("{pay_way}",donationInfo[i].pay_way).replace("{userdonate}",donationInfo[i].user_donate);
if(donationInfo[i].donate_confirm=="NO"){str=str.replace("{donate_out}","等待管理员审核...")
}else{str=str.replace("{donate_out}",donationInfo[i].donate_out)
}STR+=str}STR+="</tbody>";donate_tbody.innerHTML+=STR
});window.onload=function(){var arrayList=document.getElementsByTagName("tr");
var pageText=document.getElementsByTagName("p")[0].innerHTML;
var personNum=arrayList.length-1,sumDonate=0;var nowDate=new Date;
for(var i=1;i<arrayList.length;i++){sumDonate+=Number(arrayList[i].getElementsByTagName("td")[2].innerHTML);
var payWay=arrayList[i].getElementsByTagName("td")[1].innerHTML;
var outWay=arrayList[i].getElementsByTagName("td")[3].innerHTML;
if(payWay=="微信"){document.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].style.color="rgb(60,176,53)"
}else{document.getElementsByTagName("tr")[i].getElementsByTagName("td")[1].style.color="rgb(2,161,226)"
}document.getElementsByTagName("tr")[i].getElementsByTagName("td")[3].innerHTML="";
console.log();if(outWay!="等待管理员审核..."){document.getElementsByTagName("tr")[i].getElementsByTagName("td")[3].innerHTML+="<span class='inline-tag blue'>"+outWay+"</span>&nbsp;"
}else{document.getElementsByTagName("tr")[i].getElementsByTagName("td")[3].innerHTML+="<span class='inline-tag green'>"+outWay+"</span>&nbsp;"
}var donatMoney=arrayList[i].getElementsByTagName("td")[2].innerHTML;
document.getElementsByTagName("tr")[i].getElementsByTagName("td")[2].innerHTML=donatMoney+"￥"
}nowDate=(nowDate.getMonth()+1)+"/"+nowDate.getDate()+"/"+nowDate.getFullYear();
document.getElementsByTagName("p")[0].innerHTML=pageText.replace(/nowDate/,nowDate).replace(/personNum/,personNum).replace(/sumDonate/,sumDonate.toFixed(2))
};