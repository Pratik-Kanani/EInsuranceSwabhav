using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace EInsuranceAPI.Models
{
    public class UserContext : DbContext
    {
        public UserContext(DbContextOptions<UserContext> options)
        : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if(!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=.\SQLExpress;Database=EInsuranceApp;Integrated Security=SSPI");
            }
        }
    }
}