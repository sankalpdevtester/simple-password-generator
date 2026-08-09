interface ClipboardOptions {
  copy: (text: string) => void;
}

class Clipboard {
  public copy(text: string) {
    navigator.clipboard.writeText(text);
  }
}

export const clipboard = new Clipboard();