namespace EInsuranceAPI.Models
{
    public class Agent
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Code { get; set; }
        public string Password { get; set; }
        public string ConfirmPassword { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Qualification { get; set; }
        public bool Status { get; set; }
        public virtual Employee Employee { get; set; }
    }
}