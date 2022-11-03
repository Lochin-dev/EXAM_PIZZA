"use strict";

const Select = [];
const Buttons = [];
const Products = [];
const someThing = [];

$(".noni_select").addEventListener("change", (e) => {
  e.target.value;
  $(".joyla").innerHTML = e.target.value;
  Select.push(e.target.value);
  console.log(e.target.value);
});

for (let i = 0; i < $$(".noni_btn").length; i++) {
  $$(".noni_btn")[i].addEventListener("click", (e) => {
    $(".olcham").innerHTML = e.target.innerHTML;
    Buttons.push(e.target.innerHTML);
    console.log(e.target.innerHTML);
  });
}

$(".yashil1").addEventListener("click", (e) => {
  $(".yashil1").classList.add("yashil");
  $(".yashil2").classList.remove("yashil");
  $(".yashil3").classList.remove("yashil");
});

$(".yashil2").addEventListener("click", (e) => {
  $(".yashil2").classList.add("yashil");
  $(".yashil1").classList.remove("yashil");
  $(".yashil3").classList.remove("yashil");
});

$(".yashil3").addEventListener("click", (e) => {
  $(".yashil3").classList.add("yashil");
  $(".yashil2").classList.remove("yashil");
  $(".yashil1").classList.remove("yashil");
});

for (let i = 0; i < $$(".input").length; i++) {
  const div = document.createElement("p");
  $$(".input")[i].addEventListener("change", (e) => {
    if ($$(".input")[i].checked == true) {
      div.innerHTML = e.target.value;
      Products.push(e.target.value);
      console.log(e.target.value);
    } else {
      div.innerHTML = "";
      console.log(e.target.value);
      Products.pop();
    }
    $(".ustida").appendChild(div);
  });
}

for (let i = 0; i < $$(".checkbox").length; i++) {
  const p = document.createElement("p");
  $$(".checkbox")[i].addEventListener("change", (e) => {
    if ($$(".checkbox")[i].checked == true) {
      p.innerHTML = e.target.value;
      console.log(e.target.value);
      someThing.push(e.target.value);
    } else {
      p.innerHTML = "";
      someThing.pop();
    }
    $(".qoshimcha").appendChild(p);
  });
}

$(".aside_btn").addEventListener("click", () => {
  if (
    Select.length <= 0 ||
    Buttons.length <= 0 ||
    Products.length <= 0 ||
    someThing.length <= 0
  ) {
    $(".background__container-content-img").src = "./images/x.png";
    $(".background__container-content-img").alt = "x";
    $(".background__container-content-img").title = "x";
    $(".background").setAttribute("class", "background active");
  } else if (
    Select.length !== 0 &&
    Buttons.length !== 0 &&
    Products.length !== 0 &&
    someThing.length !== 0
  ) {
    $(".background__container-content-img").src = "./images/check.png";
    $(".background__container-content-img").alt = "check";
    $(".background__container-content-img").title = "check";
    $(".background").setAttribute("class", "background active");
  }
});

$(".background__container-content-img2").addEventListener("click", () => {
  $(".background").setAttribute("class", "background");

  if (
    Select.length !== 0 &&
    Buttons.length !== 0 &&
    Products.length !== 0 &&
    someThing.length !== 0
  ) {
    $(".background__container-content-img").src = "./images/check.png";
    $(".background__container-content-img").alt = "check";
    $(".background__container-content-img").title = "check";
    $(".background").setAttribute("class", "background active");
    $(".background__container-content-img2").href = "index.html";
    let array = [...Select, ...Buttons, ...Products, ...someThing];
    console.log(array);
    alert(array);
  }
});
