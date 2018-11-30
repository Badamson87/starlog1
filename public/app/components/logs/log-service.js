// @ts-ignore
let _logApi = axios.create({
  baseURL: '/api/logs',
  withCredentials: true
})

let _logs = []


export default class LogService {

  addLog(log, draw) {
    _logApi.post("", log)
      .then(res => {
        draw()
      })
      .catch(err => {
        console.error(err)
      })
  }

  getLogs(draw) {
    console.log('getting logs')
    _logApi.get('')
      .then((res) => {
        draw(res.data)
      })
      .catch(err => {
        console.error(err)
      })
  }
  createLog(log, getLogsCallback) {
    _logApi.post('', log)
      .then(function (res) {
        getLogsCallback()
      }
      ).catch(err => {
        console.error(err)
      })
  }
  deleteLog(id, getLogsCallback) {
    _logApi.delete(id)
      .then(res => {
        getLogsCallback()
      })
  }
}


