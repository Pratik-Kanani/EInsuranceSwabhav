using Microsoft.EntityFrameworkCore;
using System.Diagnostics.CodeAnalysis;

namespace EInsuranceAPI.Models
{
    public class EInsuranceAppContext : DbContext
    {
        public EInsuranceAppContext()
        {

        }
        public EInsuranceAppContext(DbContextOptions<EInsuranceAppContext> options)
        : base(options)
        {

        }
        public DbSet<Admin> Admins { get; set; }
        public DbSet<Employee> Employees { get; set; }
        public DbSet<Agent> Agents {get;set;}
        public DbSet<Customer> Customers {get;set;}
        public DbSet<InsurancePlan> InsurancePlans { get; set; }
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(@"Server=.\SQLExpress;Database=EInsuranceApp;Integrated Security=SSPI");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Agent>()
            .HasOne(a => a.Employee);

            modelBuilder.Entity<Customer>()
            .HasOne(c => c.Agent);
        }
    }
}