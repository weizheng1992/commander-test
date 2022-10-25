/*
 * @Author: weizheng
 * @Date: 2022-10-25 13:13:21
 * @LastEditors: weizheng
 * @LastEditTime: 2022-10-25 13:13:29
 */
const open = require("open");
const chalk = require("chalk");

module.exports = async function (options) {
  console.log(chalk.greenBright(`Config path: ${process.templateCli.configPath}`));

  if (options.show) {
    return await open(process.templateCli.configFolder);
  }

  if (options.open) {
    return await open(process.templateCli.configPath);
  }

  if (options.reset) {
    require("./utils").initConfig(true);
    console.log(chalk.greenBright("Config reset successful"));
    return;
  }
};