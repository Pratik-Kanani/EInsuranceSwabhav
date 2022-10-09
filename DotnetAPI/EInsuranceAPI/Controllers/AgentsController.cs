using EInsuranceAPI.Models;
using EInsuranceAPI.Repositories;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EInsuranceAPI.Controllers
{
    [ApiController]

    [Route("agents")]
    public class AgentsController : Controller
    {
        private readonly IAgentRepository _agentRepository;
        public AgentsController(IAgentRepository agentRepository)
        {
            _agentRepository = agentRepository;
        }
        [HttpGet]
        public async Task<IActionResult> GettAllAgents()
        {
            var agents = _agentRepository.GetAllAgents();
            return Ok(agents);
        }
        [HttpPost]
        public async Task<IActionResult> AddAgents([FromBody] Agent agent)
        {
            agent.ID = Guid.NewGuid();
            _agentRepository.AddAgent(agent);
            return Ok(agent);
        }
        [HttpPut]
        public async Task<IActionResult> UpdateAgent([FromBody] Agent agent)
        {
            _agentRepository.UpdateAgent(agent);
            return Ok(agent);
        }
        /*public async Task<IActionResult> DeleteAgent([FromBody] Agent agent)
        {
            _agentRepository.DeleteAgent(agent);
            return Ok();
        }*/
    }
}
