using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;
using EInsuranceAPI.Models;
using EInsuranceAPI.CommonLibrary.Interfaces;
using EInsuranceAPI.Repositories;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.
const string connectionString = @"Server=.\SQLExpress;Database=EInsuranceApp;Integrated Security=SSPI";

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
//builder.Services.AddDbContext<UserContext>(opt=> opt.UseSqlServer(connectionString));
//builder.Services.AddDbContext<AgentDBContext>(opt=>opt.UseSqlServer(connectionString));
//builder.Services.AddDbContext<AdminContext>(opt=> opt.UseSqlServer(connectionString));
//builder.Services.AddDbContext<EmployeeContext>(opt=> opt.UseSqlServer(connectionString));
builder.Services.AddDbContext<EInsuranceAppContext>(x => x.UseSqlServer(connectionString));
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddScoped<ICustomerRepository,CustomerRepository>();
//builder.Services.AddScoped<IUserRepository,UserRepository>();
// builder.Services.AddDbContextPool<UserContext>
// (x => x.UseSqlServer(connectionString, b=> b.MigrationsAssembly))

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
