export const saveValue = (key: string, value: any) => {
    if (typeof value === 'object') {
      localStorage.setItem(key, JSON.stringify(value));
    } else {
      localStorage.setItem(key, value);
    }
  };
  
  export const getValue = (key: string, shouldParse?: boolean) => {
    if (shouldParse) {
      return JSON.parse(localStorage.getItem(key));
    }
    return localStorage.getItem(key);
  };
  
  export const removeItem = (key: string) => localStorage.removeItem(key);
  