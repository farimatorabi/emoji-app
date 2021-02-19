const myEmojis = ["👩🏻‍🎓", "👩🏻‍💻", "🏊🏻‍♀️", "🎹"]




function renderEmoji() {
      const emojiContainer = document.getElementById("emoji-container")
      emojiContainer.innerHTML = ""
      for(let i=0; i < myEmojis.length; i++){
            const emoji = document.createElement("span")
            emoji.textContent = myEmojis[i]
            emojiContainer.append(emoji)
      }
}

renderEmoji()

const pushBtn = document.getElementById("push-btn")
pushBtn.addEventListener("click", function(){
      const emojiInput = document.getElementById("emoji-input")
      if(emojiInput.value){
            myEmojis.push(emojiInput.value)
            emojiInput.value = ""
            renderEmoji()
      }
})

const unshiftBtn = document.getElementById("unshift-btn")
unshiftBtn.addEventListener("click", function(){
      const emojiInput = document.getElementById("emoji-input")
      if(emojiInput.value){
            myEmojis.unshift(emojiInput.value)
            emojiInput.value = ""
            renderEmoji()
      }
})

const popBtn = document.getElementById("pop-btn")
popBtn.addEventListener("click", function(){
      myEmojis.pop()
      renderEmoji()
})

const shiftBtn = document.getElementById("shift-btn")
shiftBtn.addEventListener('click', function(){
      myEmojis.shift()
      renderEmoji()
})