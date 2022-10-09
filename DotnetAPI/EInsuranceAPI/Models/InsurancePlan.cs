using System;

namespace EInsuranceAPI.Models
{
    public class InsurancePlan
    {
        public int Id { get; set; } 
       
        public string InsuranceType { get; set; }

        public int PolicyTermMin { get; set; }

        public int PolicyTermMax { get; set; }

        public int MinimumAge { get; set; }

        public int MaximumAge { get; set; }

        public int MinimumInvestmentAmount { get; set; }

        public int MaximumInvestmentAmount { get; set; }

        public int ProfitPercentage { get; set; }

        public int NewRegistrationCommission { get; set; }


    }
}