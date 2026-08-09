interface DarkModeOptions {
  toggleDarkMode: () => void;
  isDarkMode: boolean;
}

class DarkMode {
  private isDarkMode: boolean;
  private toggleDarkMode: () => void;

  constructor() {
    this.isDarkMode = false;
    this.toggleDarkMode = this.toggleDarkMode.bind(this);
  }

  public init() {
    const storedDarkMode = localStorage.getItem('darkMode');
    if (storedDarkMode === 'true') {
      this.isDarkMode = true;
      document.documentElement.classList.add('dark-mode');
    }
  }

  public toggleDarkMode() {
    this.isDarkMode = !this.isDarkMode;
    if (this.isDarkMode) {
      document.documentElement.classList.add('dark-mode');
      localStorage.setItem('darkMode', 'true');
    } else {
      document.documentElement.classList.remove('dark-mode');
      localStorage.setItem('darkMode', 'false');
    }
  }

  public getDarkModeOptions(): DarkModeOptions {
    return {
      toggleDarkMode: this.toggleDarkMode,
      isDarkMode: this.isDarkMode,
    };
  }
}

export const darkMode = new DarkMode();