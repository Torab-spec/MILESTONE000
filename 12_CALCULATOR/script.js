const input = document.getElementById("input_box");

const buttons = document.querySelectorAll("button");

let str = "";
for (let i = 0; i < buttons.length; i++) {
  let buttonsElement = buttons?.[i]; // 0r  //   let buttonsElement = buttons[i];

  buttonsElement.addEventListener("click", (e) => {
    // console.log(e.target.innerHTML); // || j Button a click korbo sei button ti print hobe/
    // input.value = e.target.innerHTML;    // j element tai click korbo sei ta print hobe but next element a click korle 1st element k replace kore dea 2nd element ti chole asbe

    // str = str + e.target.innerHTML;
    //input.value = str; // j button ti te click kobe sei ta print hobe ebong 2nd button a click korle 1st a click kora button k replace korbe na , por por add hobe  string er moto kore

    let innerHTML = e.target.innerHTML;
    if (innerHTML === "AC") {
      str = "";
      //   input.value = str;
    } else if (innerHTML === "DEL") {
      str = str.substring(0, str.length - 1);
      //   input.value = str;
    } else if (innerHTML === "=") {
      str = eval(str); //eval() is a in-build method in javaScript || which help us to perform the mathematical operation
      //   input.value = str;
    } else {
      str = str + e.target.innerHTML;
      //   input.value = str;
    }
    input.value = str;
  });
}
