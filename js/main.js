const requestURL = 'http://api.limon.agency/public/api/regions'
const xhr = new XMLHttpRequest ()


xhr.open('GET', requestURL)
xhr.responseType = 'json'
xhr.onload = () => {
  console.log(xhr.response)
}

xhr.send()