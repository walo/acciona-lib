export const classNames = (...values: Array<string | undefined | false | null>): string =>
  values.filter(Boolean).join(' ');
