using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SeeN.Migrations
{
    /// <inheritdoc />
    public partial class seat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "Collum",
                table: "Seats",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "Row",
                table: "Seats",
                type: "int",
                nullable: false,
                defaultValue: 0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Collum",
                table: "Seats");

            migrationBuilder.DropColumn(
                name: "Row",
                table: "Seats");
        }
    }
}
