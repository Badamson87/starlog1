// @ts-ignore
let _logApi = axios.create({
  baseURL: "localhost:3000/api/logs"
})

let _logs = []
let logkey = "/logs"
export default class LogService {
  constructor() {
    console.log('log service working')
    console.log()

  }
  getLogs() {
    _log.get()
  }
}


