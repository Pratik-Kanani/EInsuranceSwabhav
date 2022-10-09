using Microsoft.AspNetCore.Mvc;
using EInsuranceAPI.Models;
using EInsuranceAPI.Repositories;

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
            return Ok(_customerRepository.GetAllCustomers());
        }
    }
}