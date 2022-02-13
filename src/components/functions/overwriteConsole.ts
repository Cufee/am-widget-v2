export default function overwriteConsole() {
  var console: Console = {} as Console;
  const log = () => {};
  console.log = log;
  console.info = log;
  console.warn = log;
  console.debug = log;
  console.error = log;
  window.console = console;
}
