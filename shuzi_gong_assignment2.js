
const itemsObject = [
    { quantity: 1, price: 200 },
    { quantity: 3, price: 350 },
    { quantity: 5, price: 400 },
   ];
   

console.log(itemsObject);


const newList = document.querySelector('#p1')
  console.log(newList)

   for(let i = 0; i < itemsObject.length; i++) {
    console.log(itemsObject[i]);
    const newElement = document.createElement('li');
    newElement.textContent = "Quantity: " + itemsObject[i].quantity * 2  + '   ' + "Price: " +itemsObject[i].price *2
    newList.append(newElement) }
    
//不知道
    const newArrayP1 = itemsObject.filter(function (ele) {
       
  return (ele.quantity = 2*ele.quantity )
   &&
         (ele.price = 2* ele.price);
        }
);
console.log(newArrayP1);

//有什么区别
//const newArrayP1again = itemsObject.map(function (ele) {
 // return (ele.price * 2)
  // &&
 //        (ele.quantity *2);
         
//});
//console.log(newArrayP1again);





newArrayele = document.createElement('oi');
newList.append(newArrayele);

    function getQuantity({quantity,price}) { 
      return (quantity > 2 && price > 300); 
    }
   


   const list2 = itemsObject.filter(price => itemsObject.price > 300);
   console.log(list2); 

   console.log(newList);

  

 //   var newArrayForP1 = [];
 //   function factory(quantity){
 //       for(let i =0; i < array.length; i++){
   //         if (n > 3);
          //  newArrayForP1.push(array[i]);
       // }
  //      return newArrayForP1
 //   }
//console.log(factory(itemsObject))

var newArrayforP2 = itemsObject.filter(function (el) {
  return el.price > 300 &&
         el.quantity > 2
         
});
console.log(newArrayforP2);


const string = ' Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  '; 
   
    text = string.replace(/\s+/g, ' ').trim().toLocaleLowerCase();


function onlyLettersAndSpaces(str) {
    result = '';
    for (i = 0; i < str.length; i++) {
        if (/^[A-Za-z\s]*$/.test(str[i])) {
            result += (str[i]);
        }
        else{
            result += " ";
        }
    }
    return result;
}

console.log(onlyLettersAndSpaces(text));
newList.append(onlyLettersAndSpaces(text));

const first = [
{ uuid: 2, name: "test" }, { uuid: 5, name: "test5" }, { uuid: 3, name: "test3" }
];
const second = [
{ uuid: 6, role: "pm" },{ uuid: 4, role: "engineer" }, { uuid: 1, role: "manager" }, { uuid: 2, role: "associate" }
];

//?

const mergeById = (a1, a2) =>
    a1.map(itm => ({
        ...a2.find((item) => (item.uuid === itm.uuid) && item),
        ...itm
    }));

console.log(mergeById(first, second));
const resultfands = mergeById(first, second).concat(second);
console.log(resultfands);
//有用
const combinedItems = (arr = []) => {
   const res = arr.reduce((acc, obj) => {
      let found = false;
      for (let i = 0; i < acc.length; i++) {
         if (acc[i].uuid === obj.uuid) {
            found = true;
         };
      }
      if (!found) {
         acc.push(obj);
      }
      return acc;
   }, []);
   return res;
}
var newCo = combinedItems(resultfands);
console.log(newCo);

for (let i = 0; i < newCo.length; i++) {
    if (newCo[i].hasOwnProperty('role')){
    }else{
        newCo[i].role = "null";
    }
    for (let i = 0; i < newCo.length; i++) {
    if (newCo[i].hasOwnProperty('name')){
    }else{
        newCo[i].name = "null";
    }
}
}

console.log(newCo);


newCo.sort(function(a,b){
    return a.uuid - b.uuid;
});
console.log(newCo);
