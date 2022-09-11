export const required = (value: any) =>
  value || typeof value === 'number'
    ? undefined
    : "Campo requerido"