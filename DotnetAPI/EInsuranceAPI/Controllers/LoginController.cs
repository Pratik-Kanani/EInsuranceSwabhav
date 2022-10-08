using Microsoft.AspNetCore.Mvc;
using EInsuranceAPI.Repositories;
using EInsuranceAPI.CommonLibrary.Enums;
using EInsuranceAPI.CommonLibrary.Interfaces;
using EInsuranceAPI.Models;
using EInsuranceAPI.Requests;

namespace EInsuranceAPI.Controllers
{
    public class LoginController : Controller
    {
        private readonly IUserRepository _userRepository;
        public LoginController(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        [HttpPost]
        [Route("login")]
        public async Task <IActionResult> LoginByUserNamePassword([FromBody]LoginRequest loginRequest)
        {
            User user = _userRepository.GetUserByUserName(loginRequest.UserName);
            if(user == null) return NotFound("No such user found");
            if(user.Password != loginRequest.Password) return BadRequest("Invalid Password");
            return Ok(user);   
        }
        
    }
}