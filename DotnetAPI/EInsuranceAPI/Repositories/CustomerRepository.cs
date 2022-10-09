using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EInsuranceAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EInsuranceAPI.Repositories
{
    public class CustomerRepository : ICustomerRepository
    {
        private readonly EInsuranceAppContext _context;
        public CustomerRepository(EInsuranceAppContext context)
        {
            _context = context;
        }
        public IEnumerable<Customer> GetAllCustomers()
        {
            return _context.Customers.ToList();
        }
    }
}