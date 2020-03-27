
import { poems } from "../data/poems.js";
$(document).ready(function(){
  
  const poemTitle = $("#PoemTitle")
  const poemContainer = $("#PoemContainer")
  const author = $("#PoemAuthor")
  const button = $("#Randomizer")
  const poemBody = $("#PoemDiv")
  
  button.on("click", function(){

    poemBody.children("p").remove()

    let num = Math.floor((Math.random()*poems.length +1))

    let foundPoem = poems[num-1]

    poemTitle.text(`${foundPoem.title}`)

    foundPoem.content.forEach(line =>{
      poemBody.append($("<p></p>").text(line))
    }
    )

    author.text(`by: ${foundPoem.author}`)
  })

})

// what you could do is take when you're setting state the second time 
// .then((res)=>{
  // setState(prev => () [...prev res.data])
  // [...prev res.data] 
  // })
// })

