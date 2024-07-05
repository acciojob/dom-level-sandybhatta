//your JS code here. If required.
let lists=document.querySelectorAll("li");
let count=0;
for(let i=0;i<lists.length;i++){
	if(lists[i].id=="level"){
		alert(`The level of the element is: ${count}`)
	}
	else{
		count++;
	}
}