/**
 * holds configuration info for the application, all external variable references are accessible here
 */
export class Configuration {

  static isDevelopment(): boolean {
    return process.env.NODE_ENV !== "production";
  }

}