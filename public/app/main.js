import LogController from "./components/logs/log-controller.js"
import AuthController from "./components/auth/auth-controller.js"
import AuthService from "./components/auth/auth-service.js"

let auth = new AuthService()


class App {
  constructor() {
    this.controllers = {
      authController: new AuthController(auth),
      logController: new LogController(auth)
    }
  }
}







// @ts-ignore
window.app = new App()
