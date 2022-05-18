import { poems } from "../data/poems.js";
$(document).ready(function () {
  const poemTitle = $("#PoemTitle");
  const author = $("#PoemAuthor");
  const button = $("#Randomizer");
  const poemContainer = $("#PoemContainer");
  const poemBody = $("#PoemDiv");
  let number = 100;

  button.on("click", function () {
    function createPoem(num) {
      poemBody.children("p").remove();
      let foundPoem = poems[num - 1];
      number = num;
      poemTitle.text(`${foundPoem.title}`);

      foundPoem.content.forEach((line) => {
        poemBody.append($("<p></p>").text(line));
      });
      author.text(`by: ${foundPoem.author}`);
    }
    console.log(number);
    if (number != 100) {
      console.log("did it");
    }

    let num = Math.floor(Math.random() * poems.length + 1);
    if (number != num) {
      createPoem(num);
    } else {
      if (poems.length > num) {
        createPoem(num + 1);
      } else {
        createPoem(num - 1);
      }
    }
  });
});

// what you could do is take when you're setting state the second time
// .then((res)=>{
// setState(prev => () [...prev res.data])
// [...prev res.data]
// })
// })
