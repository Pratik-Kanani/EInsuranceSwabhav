using EInsuranceAPI.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace EInsuranceAPI.Controllers
{
    [ApiController]
    [Route("agents")]
    public class AgentsController : Controller
    {
        private readonly AgentDBContext _agentdbContext;
        public AgentsController(AgentDBContext agentDBContext)
        {
            _agentdbContext = agentDBContext;
        }
        [HttpGet]
        public async Task<IActionResult> GettAllAgents()
        {
            var agents = await _agentdbContext.Agents.ToListAsync();
            return Ok(agents);
        }
        [HttpPost]
        public async Task<IActionResult> AddAgents([FromBody] Agent agent)
        {
            agent.ID = Guid.NewGuid();
            await _agentdbContext.Agents.AddAsync(agent);
            await _agentdbContext.SaveChangesAsync();
            return Ok(agent);
        }
    }
}
