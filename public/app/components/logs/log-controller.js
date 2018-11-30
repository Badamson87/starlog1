import LogService from "./log-service.js"

let _logService = new LogService()
let _auth = {}


function getLogs() {
  _logService.getLogs(draw)
}

function draw(logs, comments) {
  console.log(logs)
  let template = `


  <form onsubmit="app.controllers.logController.createLog(event)">
    <input type="text" name="log" placeholder="Enter the Log" required>
    <button type="submit">Submit Log</button>
  </form>
  `
  logs.forEach(log => {
    template += `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Log: ${log.description}</h5>
      <h6 class="card-subtitle mb-2 text-muted">Author: </h6>
      <p class="card-text">comments: </p>
    </div>
  </div>
    `
  });

  document.getElementById('logs').innerHTML = template
}



export default class LogController {
  constructor(auth) {
    _auth = auth
    console.log('log controller working')
    _logService.getLogs(draw)
  }

  createLog(e) {
    e.preventDefault()
    let form = e.target
    let log = {
      description: form.log.value
    }
    _logService.addLog(log, getLogs)
  }

}