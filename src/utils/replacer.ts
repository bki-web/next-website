/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const replacer = (key: string, value: any) => {
  // Check if the value is a BigInt
  if (typeof value === 'bigint') {
    // Convert it to a string
    return value.toString();
  }
  return value;
};


/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export const formatResult = (data:any) => {
    return JSON.parse(JSON.stringify(data, replacer))
}