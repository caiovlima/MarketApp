using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Market.API.Data.Context;
using Market.API.Domain.Entity;

namespace Market.API.Domain.Core.Repository
{
    public class ProdutoRepository : IProdutoRepository
    {
        private readonly ProdutosDbContext _context;

        public ProdutoRepository(ProdutosDbContext produtoDbContext)
        {
            _context = produtoDbContext;
        }
        public void Adicionar(Produto produto)
        {
            _context.Produtos.Add(produto);
            _context.SaveChanges();
        }

        public void Atualizar(Produto produto)
        {
            _context.Produtos.Update(produto);
            _context.SaveChanges();
        }

        public Produto BuscarPorId(long id)
        {
            return _context.Produtos.FirstOrDefault(p => p.ProdutoId == id);
        }

        public Produto BuscarPorNome(string nome)
        {
            return _context.Produtos.FirstOrDefault(p => p.Nome == nome);
        }
        public IEnumerable<Produto> BuscarTodos()
        {
            return _context.Produtos.ToList();
        }

        public void Remover(long id)
        {
            var entity = _context.Produtos.First(p => p.ProdutoId == id);
            _context.Produtos.Remove(entity);
            _context.SaveChanges();
        }
    }
}
