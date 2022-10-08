using Microsoft.AspNetCore.Mvc;
using EInsuranceAPI.Repositories;
using EInsuranceAPI.CommonLibrary.Enums;
using EInsuranceAPI.CommonLibrary.Interfaces;
using EInsuranceAPI.Models;

namespace EInsuranceAPI.Controllers
{
    [ApiController]
    public class UserController : Controller
    {
        private readonly IUserRepository _userRepository;

        public UserController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }
        [HttpGet]
        [Route("user")]
        [ProducesResponseType(200)]
        [ProducesResponseType(404)]
        [ProducesResponseType(500)]
        public async Task<IActionResult>GetUserById()
        {
            int id = 1;
            var user = _userRepository.GetUserById(id);

            return Ok(user);
        }
    }
}