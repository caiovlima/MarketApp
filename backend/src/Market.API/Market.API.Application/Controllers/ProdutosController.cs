using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Market.API.Domain.Core.Repository;
using Market.API.Domain.Entity;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;

namespace Market.API.Application.Controllers
{
    [Route("api/[controller]")]
    [EnableCors("CorsPolicy")]
    public class ProdutosController : Controller
    {
        private readonly IProdutoRepository _produtoRepository;

        public ProdutosController(IProdutoRepository produtoRepository)
        {
            _produtoRepository = produtoRepository;
        }

        [HttpGet]
        public IEnumerable<Produto> BuscarTodos()
        {
            return _produtoRepository.BuscarTodos();
        }

        /*[HttpGet("{id}", Name = "GetProduto")]
        public IActionResult BuscarPorId(long id)
        {
            var produto = _produtoRepository.BuscarPorId(id);
            if (produto == null)
            {
                return NotFound();
            }

            return new ObjectResult(produto);
        }*/

        [HttpGet("{nome}", Name = "GetProduto")]
        public IActionResult BuscarPorNome(string nome)
        {
            var produto = _produtoRepository.BuscarPorNome(nome);
            if (produto == null)
            {
                return NotFound();
            }

            return new ObjectResult(produto);
        }

        [HttpPost]
        public IActionResult Create([FromBody] Produto produto)
        {
            if (produto == null)
            {
                return BadRequest();

            }

            _produtoRepository.Adicionar(produto);
            return CreatedAtRoute("GetProduto", new { id = produto.ProdutoId }, produto);
        }

        [HttpPut("{id}")]
        public IActionResult Update(long id, [FromBody] Produto produto)
        {
            if (produto == null || produto.ProdutoId != id)
            {
                return BadRequest();
            }

            var _produto = _produtoRepository.BuscarPorId(id);

            if (_produto == null)
            {
                return NotFound();
            }

            _produto.Nome = produto.Nome;
            _produto.Preco = produto.Preco;

            _produtoRepository.Atualizar(_produto);

            return new NoContentResult();
        }

        [HttpDelete("{id}")]
        public IActionResult Delete(long id)
        {
            var produto = _produtoRepository.BuscarPorId(id);

            if (produto == null)
            {
                return NotFound();
            }

            _produtoRepository.Remover(id);

            return new NoContentResult();

        }

    }
}
