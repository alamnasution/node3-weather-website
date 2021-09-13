console.log("Client side javascript file is loaded!")

const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const message_1 = document.querySelector('#message-1')
const message_2 = document.querySelector('#message-2')

weatherForm.addEventListener('submit', (e) => {
    e.preventDefault()

    message_1.textContent = 'Loading...'
    message_2.textContent = ''
    
    const location = search.value
    const url = 'http://localhost:3000/weather?address=' + location
    
    fetch(url).then((response) => {
        response.json().then((data) => {
            if(data.error) {
                message_1.textContent = data.error
            } else {
                message_1.textContent = data.location
                message_2.textContent = data.forecast
            }
        })
    })
})