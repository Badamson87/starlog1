import LogService from "./log-service.js"

let _logService = new LogService()

export default class LogController {
  constructor() {
    console.log('log controller working')
    _logService
  }
}