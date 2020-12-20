using Market.API.Domain.Entity;
using System;
using System.Collections.Generic;
using System.Text;

namespace Market.API.Domain.Core.Repository
{
    public interface IProdutoRepository
    {
        void Adicionar(Produto produto);
        IEnumerable<Produto> BuscarTodos();
        Produto BuscarPorId(long id);
        Produto BuscarPorNome(string nome);
        void Remover(long id);
        void Atualizar(Produto id);
    }
}
