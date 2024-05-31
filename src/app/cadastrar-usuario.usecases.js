// no DTO recebe e repassa para o repositorio

module.exports = function cadastrarUsuarioUseCases() {
  return async function({ nome_completo, cpf, telefone, endereco, email }) {
   await usuarioRepository.cadastrar({
      nome_completo, 
      cpf, 
      telefone, 
      endereco,
      email
    })
  }
}