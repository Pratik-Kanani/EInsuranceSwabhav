using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Web; 
using EInsuranceAPI.Models;

namespace EInsuranceAPI.Repositories
{
    public interface ICustomerRepository
    {
        IEnumerable<Customer> GetAllCustomers();
        Customer AddCustomer(Customer customer);
    }
}