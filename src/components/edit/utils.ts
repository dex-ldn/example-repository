export const getSelectedOptions = (
  selectedOptions: HTMLSelectElement[]
): string[] =>
  Array.from(selectedOptions, (option: HTMLSelectElement) => option.value);
