using Microsoft.EntityFrameworkCore;
namespace EInsuranceAPI.Models
{
    public class AgentDBContext : DbContext
    {
        public AgentDBContext()
        {

        }
        public AgentDBContext(DbContextOptions<AgentDBContext> options)
       : base(options)
        {

        }
        public DbSet<Agent> Agents { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=.\SQLExpress;Database=EInsuranceApp;Integrated Security=SSPI");
            }
        }

    }
}