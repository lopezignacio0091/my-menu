export const required = (value: any) =>
  value || typeof value === "number" ? undefined : "Campo requerido";

export const joinValidations = (validations: any[]) => (value: any) => {
  for (let index = 0; index < validations.length; index += 1) {
    const validation = validations[index];
    const result = validation(value);
    if (result) {
      return result;
    }
  }
  return undefined;
};

export const email = (value: any) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Email invalido"
    : undefined;
