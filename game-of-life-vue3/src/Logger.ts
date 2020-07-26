import log from "loglevel";
export enum LogLevel {
  // noinspection JSUnusedGlobalSymbols
  TRACE = 0,
  DEBUG = 1,
  INFO = 2,
  WARN = 3,
  ERROR = 4,
  SILENT = 5
}
log.setLevel(LogLevel.INFO);

// TODO: Komponenten mitgeben, sowie "Layer", sowas wie render,event, action
export default log;