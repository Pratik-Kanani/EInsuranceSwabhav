using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EInsuranceAPI.Models;

namespace EInsuranceAPI.Repositories
{
    public interface IInsuranceRepository
    {
        IEnumerable<InsurancePlan> GetAllInsurancePlans();
        InsurancePlan AddInsurance(InsurancePlan insurancePlan);
        InsurancePlan UpdateInsurance(InsurancePlan insurancePlan);
        void  DeleteInsurance(InsurancePlan insurancePlan);
    }

}
