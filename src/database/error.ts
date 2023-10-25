export class DbError extends Error {
    constructor(error: Error, devDetails?: string) {
      super(devDetails);
    }
  }