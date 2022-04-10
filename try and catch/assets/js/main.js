function retornaHora(data) {
  if (data && !(data instanceof Date)) {
    throw new TypeError('Tipo de instancia incorreto');
  }
  if (!data) {
    data = new Date(); //cria uma data automaticamente caso não seja lançado uma
  }
  return data.toLocaleTimeString('pt-BR', {
    hour12: false,
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  });
}
try {
  const data = new Date('01-01-2020 12:49:23');
  //const hora = retornaHora(2) //it will throw an error so we can catch it
  const hora = retornaHora(); //won't show any error
  console.log(hora);
} catch (e) {
  console.log(e); // throw error, but it's not recommended to show it to the user
} finally {
  console.log('This will always run, no matter what');
}