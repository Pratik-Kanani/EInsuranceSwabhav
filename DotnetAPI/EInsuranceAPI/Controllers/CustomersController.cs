using Microsoft.AspNetCore.Mvc;
using EInsuranceAPI.Models;
using EInsuranceAPI.Repositories;
using EInsuranceAPI.DTO;

namespace EInsuranceAPI.Controllers
{
    [ApiController]
    public class CustomersController : Controller
    {
        private readonly ICustomerRepository _customerRepository;
        public CustomersController(ICustomerRepository customerRepository)
        {
            _customerRepository = customerRepository;
        }


        [HttpGet]
        [Route("allcustomers")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        public async Task<IActionResult> GetAllCustomers()
        {
            
            var customer = _customerRepository.GetAllCustomers().First();
            CustomerDTO customerResponse = new CustomerDTO()
            {
                FirstName = customer.Name,
                Lastname = customer.Email
            };
            return Ok(customerResponse);
        }
        [HttpPost]
        [Route("allcustomers")]
        public async Task<IActionResult> AddCustomers([FromBody] Customer customer)
        {
            _customerRepository.AddCustomer(customer);
            return Ok(customer);
        }
    }
}