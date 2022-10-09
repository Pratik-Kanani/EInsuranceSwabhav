using EInsuranceAPI.Models;
using EInsuranceAPI.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EInsuranceAPI.Controllers
{
    [ApiController]
    public class AgentsController : Controller
    {
        private readonly IAgentRepository _agentRepository;
        public AgentsController(IAgentRepository agentRepository)
        {
            _agentRepository = agentRepository;
        }
        [HttpGet]
        [Route("agents")]
        public async Task<IActionResult> GettAllAgents()
        {
            
            var agents = _agentRepository.GetAllAgents();
            if(agents == null) return NotFound();
            return Ok(agents);
        }
        [HttpPost]
        [Route("agents")]
        public async Task<IActionResult> AddAgents([FromBody] Agent agent)
        {
            //agent.ID = Guid.NewGuid();
            _agentRepository.AddAgent(agent);
            return Ok(agent);
        }
        [HttpPut]
        [Route("agents")]
        public async Task<IActionResult> UpdateAgent([FromBody] Agent agent)
        {
            _agentRepository.UpdateAgent(agent);
            return Ok(agent);
        }
        [HttpDelete]
        [Route("agents")]
        public async Task<IActionResult> DeleteAgent([FromBody] Agent agent)
        {
            _agentRepository.DeleteAgent(agent);
            return Ok();
        }
    }
}
