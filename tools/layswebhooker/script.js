const url = prompt('add a webhook url')
const message = prompt('add a message')
fetch(url,{method: 'POST',headers:{'Content-Type': 'application/json'},body: JSON.stringify({content: message})})
}