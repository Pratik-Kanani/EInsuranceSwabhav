using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EInsuranceAPI.Models;
using Microsoft.EntityFrameworkCore;

namespace EInsuranceAPI.Repositories
{
    public class InsuranceRepository : IInsuranceRepository
    {
        private readonly EInsuranceAppContext _context;
        public InsuranceRepository(EInsuranceAppContext context)
        {
            _context = context;
        }

        public IEnumerable<InsurancePlan> GetAllInsurancePlans()
        {
            return _context.InsurancePlans.ToList();
        }

        public InsurancePlan AddInsurance(InsurancePlan insurancePlan)
        {
            if (insurancePlan != null)
            {
                _context.InsurancePlans.Add(insurancePlan);
                _context.SaveChanges();
                return insurancePlan;
            }
            return null;
        }

        public InsurancePlan UpdateInsurance(InsurancePlan insurancePlan)
        {
            if(insurancePlan != null)
            {
                _context.Entry(insurancePlan).State = EntityState.Modified;
                _context.SaveChanges();
                return insurancePlan;
            }
            return null;
        }

        public void DeleteInsurance(InsurancePlan insurancePlan)
        {
            _context.InsurancePlans.Remove(insurancePlan);
            _context.SaveChanges();
        }

    }
}