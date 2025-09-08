class Logger {
  static log(event, payload = {}) {
    this._write("INFO", event, payload);
  }

  static warn(event, payload = {}) {
    this._write("WARN", event, payload);
  }

  static error(event, payload = {}) {
    this._write("ERROR", event, payload);
  }

  static _write(level, event, payload) {
    const entry = {
      timestamp: new Date().toISOString(),
      level,
      event,
      payload
    };

    const logs = JSON.parse(localStorage.getItem("app_logs") || "[]");
    logs.push(entry);
    localStorage.setItem("app_logs", JSON.stringify(logs));
  }

  static getAll() {
    return JSON.parse(localStorage.getItem("app_logs") || "[]");
  }

  static clear() {
    localStorage.removeItem("app_logs");
  }
}

export default Logger;
