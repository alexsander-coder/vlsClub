class AppError {
  public readonly message: string;
  public readonly statusCode: number;

  constructor(message: string, statusCode = 400) {
    this.message = message;
    this.statusCode = statusCode;
  }
}

class TestingExaust {
  private readonly mess: string;
  private readonly stt: number;

  constructor(mess: string, stt: number) {
    this.mess = mess;
    this.stt = stt;
  }
}

export default AppError || TestingExaust;