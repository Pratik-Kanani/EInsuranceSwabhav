using EInsuranceAPI.Models;

namespace EInsuranceAPI.Repositories
{
    public interface IAgentRepository
    {
        IEnumerable<Agent> GetAllAgents();
        Agent GetAgentById(int AgentId);
        Agent AddAgent(Agent agent);
        Agent UpdateAgent(Agent agent);
        void DeleteAgent(Agent agent);
    }
}
