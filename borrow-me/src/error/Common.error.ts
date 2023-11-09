export class CommonError extends Error {
  status: number;
  reason: string;
  constructor({
    message,
    status,
    reason,
  }: {
    message: string;
    status: number;
    reason: string;
  }) {
    super(message);
    this.status = status;
    this.reason = reason;
  }
}
