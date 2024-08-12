declare module "@martin-fenocchio/simple_copy" {
  /**
   * Copies the provided text to the clipboard.
   * @param text - The text to be copied to the clipboard.
   */
  function copyText(text: string): void;

  export = copyText;
}
