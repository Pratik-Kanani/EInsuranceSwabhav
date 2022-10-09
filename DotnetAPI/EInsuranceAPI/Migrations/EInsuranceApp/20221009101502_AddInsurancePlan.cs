using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EInsuranceAPI.Migrations.EInsuranceApp
{
    public partial class AddInsurancePlan : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "InsurancePlans",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    InsuranceType = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    PolicyTermMin = table.Column<int>(type: "int", nullable: false),
                    PolicyTermMax = table.Column<int>(type: "int", nullable: false),
                    MinimumAge = table.Column<int>(type: "int", nullable: false),
                    MaximumAge = table.Column<int>(type: "int", nullable: false),
                    MinimumInvestmentAmount = table.Column<int>(type: "int", nullable: false),
                    MaximumInvestmentAmount = table.Column<int>(type: "int", nullable: false),
                    ProfitPercentage = table.Column<int>(type: "int", nullable: false),
                    NewRegistrationCommission = table.Column<int>(type: "int", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_InsurancePlans", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "InsurancePlans");
        }
    }
}
