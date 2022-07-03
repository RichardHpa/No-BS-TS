function addNumbers(a: number, b: number): number {
  return a + b;
}

export default addNumbers;

export const addStrings = (str1: string, str2: string = ''): string => `${str1} ${str2}`;

export const format = (title: string, param: string | number): string => `${title} ${param}`;

export const printFormat = (title: string, param: string | number): void => {
  console.log(format(title, param));
};

export const fetchData = (url: string): Promise<string> => Promise.resolve(`Data from ${url}`);

export const introduce = (salutation: string, ...names: string[]): string =>
  `${salutation} ${names.join(' ')}`;

export const getName = (user: { first: string; last: string }): string => {
  return `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
};
