using EInsuranceAPI.Models;

namespace EInsuranceAPI.Repositories
{
    public class AgentRepository : IAgentRepository
    {
        private readonly AgentDBContext _agentdbContext;
        public AgentRepository(AgentDBContext agentdbContext)
        {
            _agentdbContext = agentdbContext;
        }

        public Agent AddAgent(Agent agent)
        {
            if(agent != null)
            {
                _agentdbContext.Agents.Add(agent);
                _agentdbContext.SaveChanges();
                return agent;
            }
            return null;
        }

        public IEnumerable<Agent> GetAllAgents()
        {
            return _agentdbContext.Agents.ToList();
        }

        public Agent GetAgentById(int AgentId)
        {
            return _agentdbContext.Agents.Find(AgentId);
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
            _agentdbContext.Agents.Remove(agent);
            _agentdbContext.SaveChanges();
        }
    }
}
