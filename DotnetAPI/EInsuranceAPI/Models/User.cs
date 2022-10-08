using EInsuranceAPI.CommonLibrary.Interfaces;
using EInsuranceAPI.CommonLibrary.Enums;

namespace EInsuranceAPI.Models
{
    public class User : IUser
    {
        public int Id {get;set;}
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public UserType UserType { get; set; }
    }
}
