 using System;  
using System.Collections.Generic;  
using System.Linq;  
using System.Web; 
using EInsuranceAPI.Models;

namespace EInsuranceAPI.Repositories
{
    public interface IUserRepository
    {
        IEnumerable<User> GetAllUsers();
        User GetUserById(int UserId);
        User GetUserByUserName(string userName);
        User AddUser(User user);
        User UpdateUser(User user);
        void DeleteUser(User user);
    }
}