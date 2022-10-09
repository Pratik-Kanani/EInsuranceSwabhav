using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace EInsuranceAPI.Migrations.EInsuranceApp
{
    public partial class SetCustomersAgentNullable : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_Agents_AgentId",
                table: "Customers");

            migrationBuilder.AlterColumn<int>(
                name: "AgentId",
                table: "Customers",
                type: "int",
                nullable: true,
                oldClrType: typeof(int),
                oldType: "int");

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_Agents_AgentId",
                table: "Customers",
                column: "AgentId",
                principalTable: "Agents",
                principalColumn: "Id");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Customers_Agents_AgentId",
                table: "Customers");

            migrationBuilder.AlterColumn<int>(
                name: "AgentId",
                table: "Customers",
                type: "int",
                nullable: false,
                defaultValue: 0,
                oldClrType: typeof(int),
                oldType: "int",
                oldNullable: true);

            migrationBuilder.AddForeignKey(
                name: "FK_Customers_Agents_AgentId",
                table: "Customers",
                column: "AgentId",
                principalTable: "Agents",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }
    }
}
