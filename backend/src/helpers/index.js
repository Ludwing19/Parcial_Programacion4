import Server from "./Server";
import StartUp from "./Startup";

const app = new StartUp(new Server());
app
  .Start()
  .then(async () => {})
  .catch((err) => {
    console.log(err);
    process.exit();
  });
