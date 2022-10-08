using EInsuranceAPI.CommonLibrary.Interfaces;
using System;

namespace EInsuranceAPI.Models
{

	public class Agent: IUser
	{
        public System.Guid ID { get; set; }
        public string Name { get; set; }
        public string UserName { get; set; }
        public string Password { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Qualification { get; set; }
        public Nullable<bool> Status { get; set; }
        
	}
}
