using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EInsuranceAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EInsuranceAPI.Repositories
{
    public class UserRepository/*<TDbContext>*/ : IUserRepository
    {
        private readonly UserContext _context;
        public UserRepository(UserContext context)
        {
            _context = context;
        }

        public IEnumerable<User> GetAllUsers()
        {
            return _context.Users.ToList();
        }
        public User GetUserById(int UserId)
        {
            return _context.Users.Find(UserId);
        }
        public User GetUserByUserName(string userName)
        {
            return _context.Users.Where(u=> u.UserName.Equals(userName)).First();
        }
        public User AddUser(User user)
        {
            if (user != null)
            {
                _context.Users.Add(user);
                _context.SaveChanges();
                return user;
            }
            return null;
        }
        public User UpdateUser(User user)
        {
            if (user != null)
            {
                _context.Entry(user).State = EntityState.Modified;
                _context.SaveChanges();
                return user;
            }
            return null;
        }
        public void DeleteUser(User user)
        {
            _context.Users.Remove(user);
            _context.SaveChanges();
        }
    }
}