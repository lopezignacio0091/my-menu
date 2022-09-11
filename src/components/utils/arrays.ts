export const ID = () => `_${Math.random().toString(36).substr(2, 9)}`;
export const deepClone = (obj: any) => {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }
  if (obj instanceof Date) {
    return new Date(obj.getTime());
  }

  if (obj instanceof Array) {
    return obj.reduce((arr: any, item) => {
      const newArr: any = deepClone(item);
      return newArr;
    }, []);
  }

  if (obj instanceof Object) {
    return Object.keys(obj).reduce((accObj: any, key) => {
      const newObj: any = deepClone(obj[key]);
      return newObj;
    }, {});
  }

  return false;
};

export const getPropertyByPathString = (project: any, myPath: string) =>
  myPath.split('.').reduce((res, prop) => res && res[prop], project);

const isEmpty = (obj: any) =>
  obj == null ||
  (typeof obj === 'string' && obj === '') ||
  (typeof obj === 'number' && Number.isNaN(obj)) ||
  (Array.isArray(obj) && obj.length === 0);

export const clearEmptyProperties = (object: any): any =>
  Object.keys(object).reduce((acc, key) => {
    const obj = object[key];
    if (isEmpty(obj)) return acc;
    if (typeof obj === 'object' && !Array.isArray(obj))
      return { ...acc, [key]: clearEmptyProperties(obj) };
    return { ...acc, [key]: obj };
  }, {});
