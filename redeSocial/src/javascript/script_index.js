const li = document.querySelectorAll("li")
li.forEach((e)=>{
    e.addEventListener("mouseenter",()=>{
        e.style.fontSize = "20px"
    }) 
    e.addEventListener("mouseleave",()=>{
        e.style.fontSize = "inherit"
    })
})

