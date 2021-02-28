
const dice = {"&#9856" : "⚀",
    "&#9857" : "⚁",
    "&#9858" : "⚂",
    "&#9859" :"⚃",
    "&#9860" :"⚄",
    "&#9861" : "⚅"}
    

    const input = document.querySelector("#number-input")
    const button = document.querySelector("button")
    const outputDice = document.querySelector("#dice-para")
    let outputSum = document.querySelector("#sum-para")
    const ul = document.querySelector("#history-list")
    const formDice = document.querySelector("dice-form") 

    button.addEventListener("click", (e) => {
       addToHistory(e)
        rollTheDice(e)
    })
   
    let count = 0
    
    
    function rollTheDice (e) {
        e.preventDefault()
            let sum = 0
            for(let i =0; i < Number(input.value); i++) {
         let randomDice = dice[Object.keys(dice)[Math.floor(Math.random()*Object.keys(dice).length)]]//dice[Math.floor(Math.random() * dice.length)]
         outputDice.textContent += randomDice
         
         if(randomDice === "⚀") {
             sum += 1
         } else if(randomDice === "⚁") {
             sum += 2
         } else if(randomDice === "⚂") {
             sum += 3
         } else if(randomDice === "⚃") {
             sum +=4
         } else if(randomDice === "⚄") {
             sum += 5
         } else if(randomDice === "⚅") {
             sum += 6
         }
         outputSum.textContent = sum
}  
  input.value = "";
  
};
 
function addToHistory (e) {
    e.preventDefault()
    count++
    if(count === 1) {
        rollTheDice(e)
    } else {
        const li = document.createElement("li");
        li.textContent = `${outputDice.textContent} = ${outputSum.textContent}`;
        ul.appendChild(li);
        outputDice.textContent = "";
}
}

