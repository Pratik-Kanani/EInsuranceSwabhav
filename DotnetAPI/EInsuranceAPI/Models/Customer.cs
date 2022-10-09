namespace EInsuranceAPI.Models
{
    public class Customer
    {
        public int Id {get;set;}
        public string FirstName {get;set;}
        public string LastName {get;set;}
        public string UserName {get;set;}
        public string Password {get;set;}
        public Agent? Agent {get;set;}
    }
}