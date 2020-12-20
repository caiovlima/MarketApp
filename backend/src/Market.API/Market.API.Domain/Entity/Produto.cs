using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Text;

namespace Market.API.Domain.Entity
{
    public class Produto
    {
        [Key]
        public int ProdutoId { get; set; }

        [StringLength(60, MinimumLength = 3)]
        [Required]
        public string Nome { get; set; }
        [RegularExpression(@"^[A-Z]+[a-zA-Z""'\s-]*$")]
        [Required]
        public double Preco { get; set; }

    }
}
