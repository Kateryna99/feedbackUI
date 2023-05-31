const targetContainer= document.querySelector('.feedback__content')

const button = document.querySelector('.feedback__button')
/*const formData = new FormData(targetContainer)
const reviewReaction = formData.get('review')*/


function createAnswer(reviewReaction) {
    const response = document.createElement('div')
    response.classList.add('response')

    const responseHeader = document.createElement('h1')
    responseHeader.innerHTML = 'Thank you!'
    responseHeader.classList.add('response__title')

    const responseMain = document.createElement('p')
    responseMain.innerHTML = `Feedback: ${reviewReaction}`
    responseMain.classList.add('response__name')

    const responseFooter = document.createElement('p')
    responseFooter.innerHTML = 'We\'ll use your feedback to improve our customer support.'
    responseFooter.classList.add('response__text')

    response.append(responseHeader,responseMain,responseFooter)

    return response
}

function sendReview(reviewReaction) {
    targetContainer.innerHTML = ''

    targetContainer.append(createAnswer(reviewReaction))
}


targetContainer.addEventListener('submit',(event)=>{
    event.preventDefault()

    const formData = new FormData(targetContainer)
    const reviewReaction = formData.get('review')

    if(reviewReaction){
        sendReview(reviewReaction)
    }


})



