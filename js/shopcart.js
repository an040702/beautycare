function checkcart(){
		var a,b,c;
		var f=0;
		a=document.getElementById('quantity01').value;
		b=document.getElementById('price01').innerHTML;
		c=b.slice(1,);
		document.getElementById('total01').innerText="$"+a*c;
		k=a*c;
		d=document.getElementById('total02').innerText
		e=d.slice(1,)
		g=document.getElementById('total03').innerText
		h=g.slice(1,)
		f=parseFloat(k)+parseFloat(e)+parseFloat(h);
		document.getElementById('total').innerText="$"+f;
	}
function remove(row){
      var d =row.parentNode.parentNode.rowIndex;
      document.getElementById('cart').deleteRow(d);
   }
function refresh01() {
	document.getElementById('quantity01').value=1;
	b=document.getElementById('price01').innerHTML;
	c=b.slice(1,);
	document.getElementById('total01').innerText="$"+1*c;
	d=document.getElementById('total02').innerText
	e=d.slice(1,)
	g=document.getElementById('total03').innerText
	h=g.slice(1,)
	f=parseFloat(c)+parseFloat(e)+parseFloat(h);
	document.getElementById('total').innerText="$"+f;
	}
function checkcart02(){
		var f=0;
		var a,b,c;
		a=document.getElementById('quantity02').value;
		b=document.getElementById('price02').innerHTML;
		c=b.slice(1,);
		document.getElementById('total02').innerText="$"+a*c;
		k=a*c;
		d=document.getElementById('total01').innerText
		e=d.slice(1,)
		g=document.getElementById('total03').innerText
		h=g.slice(1,)
		f=parseFloat(k)+parseFloat(e)+parseFloat(h);
		document.getElementById('total').innerText="$"+f;
	}
function refresh02() {
	document.getElementById('quantity02').value=1;
	b=document.getElementById('price02').innerHTML;
	c=b.slice(1,);
	document.getElementById('total02').innerText="$"+1*c;
	d=document.getElementById('total01').innerText
	e=d.slice(1,)
	g=document.getElementById('total03').innerText
	h=g.slice(1,)
	f=parseFloat(c)+parseFloat(e)+parseFloat(h);
	document.getElementById('total').innerText="$"+f;
	}	
function checkcart03(){
		var f=0;
		var a,b,c;
		a=document.getElementById('quantity03').value;
		b=document.getElementById('price03').innerHTML;
		c=b.slice(1,);
		document.getElementById('total03').innerText="$"+a*c;
		k=a*c;
		d=document.getElementById('total01').innerText
		e=d.slice(1,)
		g=document.getElementById('total02').innerText
		h=g.slice(1,)
		f=parseFloat(k)+parseFloat(e)+parseFloat(h);
		document.getElementById('total').innerText="$"+f;
	} 
function refresh03() {
	document.getElementById('quantity03').value=1;
	b=document.getElementById('price03').innerHTML;
	c=b.slice(1,);
	document.getElementById('total03').innerText="$"+1*c;
	d=document.getElementById('total01').innerText
	e=d.slice(1,)
	g=document.getElementById('total02').innerText
	h=g.slice(1,)
	f=parseFloat(c)+parseFloat(e)+parseFloat(h);
	document.getElementById('total').innerText="$"+f;
	}		