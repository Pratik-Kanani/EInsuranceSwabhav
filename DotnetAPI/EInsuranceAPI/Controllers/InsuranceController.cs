using Microsoft.AspNetCore.Mvc;
using EInsuranceAPI.Models;
using EInsuranceAPI.Repositories;
using System.CodeDom;
using System.Threading.Tasks;
using System.Runtime.InteropServices;
using System.Net;


namespace EInsuranceAPI.Controllers
{
    [ApiController]
    
    public class InsuranceController : Controller
    {
        private readonly IInsuranceRepository _insuranceRepository;
        
        public InsuranceController(IInsuranceRepository insuranceRepository)
        {
            _insuranceRepository = insuranceRepository;
        }

        [HttpGet]
        [Route("insuranceplans")]
        public async Task<IActionResult> GetAllPlans()
        {
          
           var insurancePlans = _insuranceRepository.GetAllInsurancePlans();
           return Ok(insurancePlans);
        }

        [HttpPost]
        [Route("insuranceplans")]
        public async Task<IActionResult> AddInsurance([FromBody] InsurancePlan insurancePlan)
        {
            //agent.ID = Guid.NewGuid();
            _insuranceRepository.AddInsurance(insurancePlan);
            return Ok(insurancePlan);
        }

        [HttpPut]
        [Route("insuranceplans")]
        public async Task<IActionResult> UpdateInsurance([FromBody] InsurancePlan insurancePlan)
        {
            _insuranceRepository.UpdateInsurance(insurancePlan);
                return Ok(insurancePlan);
        }

        [HttpDelete]
        [Route("insuranceplans")]
        public async Task<IActionResult> DeleteInsurance([FromBody] InsurancePlan insurancePlan)
        {
            _insuranceRepository.DeleteInsurance(insurancePlan);
            return Ok();
        }


    }
  
}
