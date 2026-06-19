export interface User {
  id: number;
  name: string;
  location: string;
  role: string;
}

export const getUserAction = async (id: number) => {
  console.log('Llamada de entrada.');

  await new Promise((res) => setTimeout(res, 2_000))

  console.log('Llamada de salida');


  return {
    id: id,
    name: 'Ricardo Salazar',
    location: 'Ottawa, Canada',
    role: 'FrontEnd',
  }
}