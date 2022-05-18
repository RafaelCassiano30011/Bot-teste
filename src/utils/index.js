export const clickButton = async ({ page, className }) => {
  await page.waitForSelector(className);
  await page.click(className);

  return true;
};

export const inputType = async ({ page, className, text }) => {
  await page.waitForSelector(className);
  await page.type(className, "1111");

  return true;
};

export const loginTelegram = async (page) => {
  await page.waitForTimeout(10000);
  await clickButton({ page, className: ".btn-primary.btn-secondary.btn-primary-transparent.primary.rp" });
  await page.waitForTimeout(2000);
  await page.evaluate(async () => {
    localStorage.setItem(
      "tgme_sync",
      JSON.stringify({
        canRedirect: false,
        ts: 1652870455,
      })
    );

    return true;
  });

  return true;
};
