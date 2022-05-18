import { Launcher } from "./Launcher.js";
import { loginTelegram } from "./utils/index.js";

const browser = new Launcher();

const robo = async () => {
  await browser.execute();
  const blaze = await browser.CreatePage("https://blaze.com/pt/games/double");
  const telegram = await browser.CreatePage("https://web.telegram.org/k/");

  await loginTelegram(telegram);
};

robo();
