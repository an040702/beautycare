function checkcart(){
		var a,b,c;
		a=document.getElementById('quantity01').value;
		b=document.getElementById('price01').innerHTML;
		c=b.slice(1,);
		document.getElementById('total01').innerText="$"+a*c;
	}
function remove(row){
      var d =row.parentNode.parentNode.rowIndex;
      document.getElementById('cart').deleteRow(d);
   }	