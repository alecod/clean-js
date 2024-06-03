const cadastrarUsuarioUsecases = require("./cadastrar-usuario.usecases")

describe('Cadastrar usuario UseCase', () => {
  test('Deve poder cadastrar um usuario',  () => {
    const usuarioDTO = {
      nome_completo: 'nome_valido',
      cpf: 'cpf valido',
      telefone: 'telefone valido',
      endereco: 'endereço valido',
      email: 'email valVido'
    }

    const cadastrarUsuarioUseCase = cadastrarUsuarioUsecases
  })
})