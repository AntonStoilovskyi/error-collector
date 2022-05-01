export class ErrorBag {
  private errors: Error[];

  constructor() {
    this.errors = [];
  }
  /**
   * @param  {Error} error
   * @description Adds an error to the bag
   * @returns void
   */
  public add(error: unknown): void {
    if (error instanceof Error) {
      this.errors.push(error);
      return;
    }
  }
  /**
   * @description Returns all errors in the bag
   * @returns {Error[]} errors
   */
  public getErrors(): Error[] {
    return this.errors;
  }
  /**
   * @description Returns true if bag is not empty
   * @returns boolean
   */
  public hasErrors(): boolean {
    return this.errors.length > 0;
  }
  /**
   * @description Removes all errors from the bag
   * @returns void
   */
  public clear(): void {
    this.errors = [];
  }
  /**
   * @description Logs all error messages to the console
   * @returns void
   */
  public logErrors(): void {
    if (this.hasErrors()) {
      this.errors.forEach((error) => {
        console.error(error.message);
      });
    }
  }
  /**
   * @description Handles all errors in one Error
   * @returns void
   */
  handleErrors(): void {
    if (this.hasErrors()) {
      throw new Error(this.errors.map((error) => error.message).join("\n"));
    }
  }
}
