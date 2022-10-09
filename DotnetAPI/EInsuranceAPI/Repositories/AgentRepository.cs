using EInsuranceAPI.Models;

namespace EInsuranceAPI.Repositories
{
    public class AgentRepository : IAgentRepository
    {
        private readonly EInsuranceAppContext _context;
        public AgentRepository(EInsuranceAppContext context)
        {
            _context = context;
        }

        public Agent AddAgent(Agent agent)
        {
            if(agent != null)
            {
                _context.Agents.Add(agent);
                _context.SaveChanges();
                return agent;
            }
            return null;
        }

        public IEnumerable<Agent> GetAllAgents()
        {
            return _context.Agents.ToList();
        }

        public Agent GetAgentById(int AgentId)
        {
            return _context.Agents.Find(AgentId);
        }
        public Agent UpdateAgent(Agent agent)
        {
            if(agent != null)
            {
              //pending  
            }
            return null;
        }

        public void DeleteAgent(Agent agent)
        {
            _context.Agents.Remove(agent);
            _context.SaveChanges();
        }
    }
}
