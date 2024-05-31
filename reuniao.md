## Reunião

> Somos uma biblioteca pequena e gostariamos de controlar a nossa entrada e saida de livros. Queremos cadastrar o usuario que ira pegar o livro emprestado, cadastrar os livros da nossa biblioteca e poder emprestar os livros para qualquer usuario, alem de buscar os registros de emprestimos.

## Dados

- Usuario: {Nome completo, CPF, telefone, endereço, email}
- Livro: {Nome, quantidade, autor, genero, ISBN}
- Emprestimo: {usuario_id, livro_id, data_devolucao, data_saida}

## UseCases (Regras de negocios)

[]Cadastrar um novo usuario
[] - CPF ou email devem ser unicos 

[] Buscar um cadastro de usuario por CPF,
[] - Retornar um usuario ou vazio

[] Cadastrar um novo livro
[] - ISBN deve ser unico

[] Buscar um livro por nome ou ISBN
[] - Retornar um livro ou vazio

[] Emprestar um livro ao usuario
[] - A data de retorno não pode ser menor que a data de saida
[] - Um usuario não pode estar com mais de um livro com o mesmo ISBN ao mesmo tempo
[] - Um usuario pode estar com mais de um livro com ISBN diferentes ao mesmo tempo
[] - Ao cadastrar um emprestimo, sera enviado um email automaticamente informando o nome do livro, nome do usuario, CPF, a data de saida e a data de retorno

[] Devolver o livro emprestado
[] - Caso o usuario tenha atrasado, será gerada uma multa fixa de R$10,00

[] Mostrar todos os emprestimos pendentes, com o nome do livro, nome do usuario, CPF, data de saida e data de retirno, ordenados pela data de retorno mais antiga.

## Estruturas