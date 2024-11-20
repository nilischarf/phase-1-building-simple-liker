// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

const errorModal = document.getElementById("modal")
const errorMessage = document.getElementById("modal-message")

function like() {
  const hearts = document.querySelectorAll(".like-glyph")
  hearts.forEach((heart) => {
    heart.addEventListener("click", () =>{
      const fullHeart = heart.textContent === FULL_HEART
      if (!fullHeart) {
        mimicServerCall()
          .then(() => {
            heart.textContent = FULL_HEART
            heart.classList.add("activated-heart") 
          })
          .catch((error) => {
            errorMessage.textContent = error
            errorModal.classList.remove("hidden")
            setTimeout(() => {
              errorModal.classList.add("hidden")
            }, 3000)
          })
      }
      else {
        heart.textContent = EMPTY_HEART
        heart.classList.remove("activated-heart")
      }
    })
  })
}




//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}

like()