let liItems = document.querySelectorAll("ul#categories > li.item");
console.log("Number of categories :" + liItems.length);

liItems.forEach((value) => {
  console.log("Category: " + value.querySelector("h2").innerHTML);
  console.log("Elements: " + value.querySelectorAll("ul li").length);
});
