using Market.API.Domain.Entity;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using Microsoft.Extensions.Configuration;
using System;
using System.Collections.Generic;
using System.IO;
using System.Text;

namespace Market.API.Data.Context
{
    public class ProdutosDbContext : DbContext
    {
        public ProdutosDbContext(DbContextOptions<ProdutosDbContext> options)
            :base(options)
        {

        }

        public DbSet<Produto> Produtos { get; set; }

        


       
    }
}