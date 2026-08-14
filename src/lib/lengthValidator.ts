class LengthValidator {
  private min: number;
  private max: number;

  constructor(min: number, max: number) {
    this.min = min;
    this.max = max;
  }

  validate(length: number): boolean {
    return length >= this.min && length <= this.max;
  }

  getMin(): number {
    return this.min;
  }

  getMax(): number {
    return this.max;
  }
}

const lengthValidator = new LengthValidator(8, 128);

export function validateLength(length: number): boolean {
  return lengthValidator.validate(length);
}

export function getMinLength(): number {
  return lengthValidator.getMin();
}

export function getMaxLength(): number {
  return lengthValidator.getMax();
}