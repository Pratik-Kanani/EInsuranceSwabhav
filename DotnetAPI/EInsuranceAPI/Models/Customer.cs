namespace EInsuranceAPI.Models
{
    public class Customer
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string DOB { get; set; }
        public string LoginID { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string State { get; set; }
        public string City { get; set; }
        public int PinCode { get; set; }
        public int Mobile { get; set; }
        public string Nominee { get; set; }
        public string Nominee_Relation { get; set; }
        public Agent? Agent { get; set; }
    }
}