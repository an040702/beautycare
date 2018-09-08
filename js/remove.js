
function remove_product(e) {
    data_array.splice(e-1,1);
    show_shopping();
    if(data_array.length==0){
        document.getElementById('show_table').innerHTML="EMPTY CART !!!";
    }

}
function remove_all_product() {
    data_array.splice(0,data_array.length);
    show_shopping();
    document.getElementById('show_table').innerHTML="EMPTY CART !!!";
}
function displayTable(table_shopping) {

    document.getElementById('show_table').innerHTML="<table id='table_shopping'><tr><th>No</th><th>Image</th><th>Name</th><th>Id</th><th>Type</th><th>Quantity</th><th>Price/1</th><th>Price/Quantity</th><th>Remove</th></tr></table>";
    var table = document.getElementById('table_shopping');

    var sum=0;
    for (var i = 0; i < table_shopping.length; ++i)
    {   // keep a reference to an individual president object
        var products = table_shopping[i];

        // create a row element to append cells to
        var row = document.createElement('tr');
        row.id='row_'+(i+1);
        // properties of the array elements
        var properties = ['no','image','name','id','type','value', 'price','price_quantity','kien'];

        // append each one of them to the row in question, in order
        for (var j = 0; j < properties.length; ++j) {   // create new data cell for names
            if (j == 1) {
                var cell = document.createElement('td');
                var img = document.createElement('img');
                img.src=products[properties[j]];
                img.style='height:50px;margin:10px';
                cell.appendChild(img);
            }
            else if(j==5){
                var cell= document.createElement('td');
                var input=document.createElement('input');
                input.setAttribute("onchange","change_quantity(this)");
                input.id="quantity_no_"+(i+1);
                input.type ="number";
                input.style="width:50px";
                input.min="1";
                input.max="100";
                input.value=products[properties[j]];
                cell.appendChild(input);
            }
            else if(j==properties.length-2){
                var cell = document.createElement('td');
                cell.id="price_no_"+(i+1);
                cell.innerHTML = parseInt(products[properties[5]])*parseInt(products[properties[j-1]]);
                sum+=parseInt(products[properties[5]])*parseInt(products[properties[j-1]]);
            }
            else if(j==properties.length-3){
                var cell = document.createElement('td');
                cell.id="price_"+(i+1);
                cell.innerHTML = products[properties[j]];
            }
            else if(j==0){
                var cell = document.createElement('td');
                cell.id="no_"+(i+1);
                cell.innerHTML = i+1;
            }
            else if(j==properties.length-1){
                var cell = document.createElement('td');
                var button = document.createElement('button');
                var recycle= document.createElement('i');
                button.className='btn btn-danger btn-sm';
                button.id=(i+1);
                button.setAttribute('onclick','remove_product(this.id)');
                recycle.className='fas fa-trash-alt';
                button.appendChild(recycle);
                cell.appendChild(button);
            }
            else {
                var cell = document.createElement('td');
                cell.innerHTML = products[properties[j]];
            }
            // set name of property using bracket notation (properties[i] is a string,
            // which can be used to access properties of president)

            // add to end of the row
            row.appendChild(cell);
        }
        // add new row to table
        table.appendChild(row);
        if(i==table_shopping.length-1){
            var row = document.createElement('tr');
            var cell=document.createElement('td');
            cell.setAttribute('colspan',properties.length-2);
            cell.setAttribute('style','color:blue');
            cell.innerHTML="TOTAL";
            row.appendChild(cell);
            var cell=document.createElement('td');
            cell.setAttribute('style','color:blue');
            cell.setAttribute('id','total');
            cell.innerHTML=sum;
            row.appendChild(cell);
            table.appendChild(row);
            var cell = document.createElement('td');
            var button = document.createElement('button');
            button.className='btn btn-danger btn-sm';
            button.innerHTML="ALL ";
            button.setAttribute('onclick','remove_all_product()');
            button.style='font-weight:600; font-style=both';
            cell.appendChild(button);
            row.appendChild(cell);
            table.appendChild(row);
        }
    }

}
function show_shopping(){
    displayTable(data_array);
}