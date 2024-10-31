export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return emailRegex.test(email);
};

export const isValidName = (name: string):boolean => {
  const nameRegex = /^[A-Za-z\s]+$/;

  //Verifica se tem peelo menos 3 caracteres
  const validLength = name.length >= 3;
  //
  const validFormat = nameRegex.test(name)

  //Verifica se o nome está capitalizado
  const validCapitalize = name.charAt(0) === name.charAt(0).toUpperCase()
  &&
  name.charAt(1) === name.slice(1).toLowerCase();

  //Retorno das variaveis
  return validLength && validFormat && validCapitalize;
};