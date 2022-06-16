export default class StartUp { 
  constructor(Server) {
    this._Server = Server;
  }

  async Start() {
    await this._Server.Start();
  }
}
