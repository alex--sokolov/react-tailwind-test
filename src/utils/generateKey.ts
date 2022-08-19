export const generateKey = (pre:number) => {
  return `${ pre }_${ Date.now() }`;
}