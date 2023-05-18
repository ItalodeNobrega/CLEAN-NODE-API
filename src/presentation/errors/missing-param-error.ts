export class MissingParamError extends Error {
  constructor (paramName: string) {
    super(`Missing param: ${paramName}`)
    this.name = 'MissingParamError'
  }
}
/* As classes que herdam de Error no TS elas precisamos chamar o SUPER
e dentro do super passamos a string que ela vai retornar */
