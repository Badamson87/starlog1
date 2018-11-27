import LogController from "./components/logs/log-controller.js";

class App {
  constructor() {
    this.controllers = {
      logController: new LogController()
    }
  }
}







// @ts-ignore
window.app = new App()
