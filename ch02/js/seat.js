 // 입장객 수에 따른 좌석의 줄(행)수 계산
 let customer = prompt("입장객은 몇 명인가요? "); // 입장객 수
 let colNum = prompt("한 줄에 몇명씩 앉나요? ");   // 열의 수
 let rowNum;        // 행(줄)의 수
 
 // 나머지가 있는지 없는지 처리
 if(customer == null || colNum == null){
     document.write("<p>입력이 취소되었습니다.</p>");
 }
 else{

 if((customer) % (colNum) == 0) {
     rowNum = customer / colNum;
 }
 else{
     rowNum = (customer / colNum) + 1;
 }
}

document.write("<table>")
for(var i=0; i < rowNum; i++){
    document.write("<tr>")
    for(var j = 1; j <= colNum; j++){
        var seatNum = colNum * i + j; //좌석 번호
        if(seatNum > customer)        //좌석번호가 고객수보다 많을 때 빠져나옴
        break;
        document.write("<td>좌석" + seatNum + "</td>");
    }
    document.write("</tr>");
   }
 document.write("</table>")