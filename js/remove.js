<<<<<<< HEAD
//
=======
// funtion remove
function remove_product(e) {
    data_array.splice(e-1,1);
    show_shopping();
    if(data_array.length==0){
        document.getElementById('show_table').innerHTML="EMPTY CART !!!";
    }

}

function remove_all_product() {
    data_array.splice(0,data_array.length);
    document.getElementById('show_table').innerHTML="EMPTY CART !!!";
}

>>>>>>> 038bb3758bdda06d6168563f01d5989f82ae2109
// function displayTable(table_shopping) {
//     document.getElementById('show_table').innerHTML="<table id='table_shopping'><tr><th>No</th><th>Image</th><th>Name</th><th>Id</th><th>Type</th><th>Quantity</th><th>Price/1</th><th>Price/Quantity</th><th>Remove</th></tr></table>";
//     var table = document.getElementById('table_shopping');
//     var sum=0;
//     for (var i = 0; i < table_shopping.length; ++i)
//     {   // keep a reference to an individual president object
//         var products = table_shopping[i];
<<<<<<< HEAD
//
=======

>>>>>>> 038bb3758bdda06d6168563f01d5989f82ae2109
//         // create a row element to append cells to
//         var row = document.createElement('tr');
//         row.id='row_'+(i+1);
//         // properties of the array elements
//         var properties = ['no','image','name','id','type','value', 'price','price_quantity','kien'];
<<<<<<< HEAD
//
=======

>>>>>>> 038bb3758bdda06d6168563f01d5989f82ae2109
//         // append each one of them to the row in question, in order
//         for (var j = 0; j < properties.length; ++j) {   // create new data cell for names
//             if (j == 1) {
//                 var cell = document.createElement('td');
//                 var img = document.createElement('img');
//                 img.src=products[properties[j]];
//                 img.style='height:50px;margin:10px';
//                 cell.appendChild(img);
//             }
//             else if(j==5){
//                 var cell= document.createElement('td');
//                 var input=document.createElement('input');
<<<<<<< HEAD
//                 input.setAttribute("ng-click","change_quantity(this)");
=======
//                 input.setAttribute("onchange","change_quantity(this)");
>>>>>>> 038bb3758bdda06d6168563f01d5989f82ae2109
//                 input.id="quantity_no_"+(i+1);
//                 input.type ="number";
//                 input.style="width:50px";
//                 input.min="1";
//                 input.max="100";
//                 input.value=products[properties[j]];
//                 cell.appendChild(input);
//             }
//             else if(j==properties.length-2){
//                 var cell = document.createElement('td');
//                 cell.id="price_no_"+(i+1);
//                 cell.innerHTML = parseInt(products[properties[5]])*parseInt(products[properties[j-1]]);
//                 sum+=parseInt(products[properties[5]])*parseInt(products[properties[j-1]]);
//             }
//             else if(j==properties.length-3){
//                 var cell = document.createElement('td');
//                 cell.id="price_"+(i+1);
//                 cell.innerHTML = products[properties[j]];
//             }
//             else if(j==0){
//                 var cell = document.createElement('td');
//                 cell.id="no_"+(i+1);
//                 cell.innerHTML = i+1;
//             }
//             else if(j==properties.length-1){
//                 var cell = document.createElement('td');
<<<<<<< HEAD
//                 cell.innerHTML="<div style='cursor: pointer' class='btn btn-danger btn-sm' id=i ng-click='remove_product(1)'><i class='fas fa-trash-alt'></i></div>";
=======
//                 cell.innerHTML="<div style='cursor: pointer' class='btn btn-danger btn-sm' id=i onclick='remove_product(1)'><i class='fas fa-trash-alt'></i></div>";
>>>>>>> 038bb3758bdda06d6168563f01d5989f82ae2109
//             }
//             else {
//                 var cell = document.createElement('td');
//                 cell.innerHTML = products[properties[j]];
//             }
//             // set name of property using bracket notation (properties[i] is a string,
//             // which can be used to access properties of president)
<<<<<<< HEAD
//
=======

>>>>>>> 038bb3758bdda06d6168563f01d5989f82ae2109
//             // add to end of the row
//             row.appendChild(cell);
//         }
//         // add new row to table
//         table.appendChild(row);
//         if(i==table_shopping.length-1){
//             var row = document.createElement('tr');
//             var cell=document.createElement('td');
//             cell.setAttribute('colspan',properties.length-2);
//             cell.setAttribute('style','color:blue');
//             cell.innerHTML="TOTAL";
//             row.appendChild(cell);
//             var cell=document.createElement('td');
//             cell.setAttribute('style','color:blue');
//             cell.setAttribute('id','total');
//             cell.innerHTML=sum;
//             row.appendChild(cell);
//             table.appendChild(row);
//             var cell = document.createElement('td');
//             var button = document.createElement('button');
//             button.className='btn btn-danger btn-sm';
<<<<<<< HEAD
//             button.setAttribute('ng-app','productApp');
//             button.setAttribute('ng-controller','productCtrl');
=======
//             // button.setAttribute('ng-app','productApp');
//             // button.setAttribute('ng-controller','productCtrl');
>>>>>>> 038bb3758bdda06d6168563f01d5989f82ae2109
//             button.innerHTML="ALL ";
//             button.setAttribute('ng-click','remove_all_product()');
//             button.style='font-weight:600; font-style=both';
//             cell.appendChild(button);
//             row.appendChild(cell);
//             table.appendChild(row);
//         }
//     }
// }
<<<<<<< HEAD
=======
function show_shopping(){
    displayTable(data_array);
}
>>>>>>> 038bb3758bdda06d6168563f01d5989f82ae2109
