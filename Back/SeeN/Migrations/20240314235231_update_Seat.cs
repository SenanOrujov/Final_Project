using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SeeN.Migrations
{
    /// <inheritdoc />
    public partial class update_Seat : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Column",
                table: "Seats");

            migrationBuilder.DropColumn(
                name: "Row",
                table: "Seats");

            migrationBuilder.RenameColumn(
                name: "Capacity",
                table: "Halls",
                newName: "Row");

            migrationBuilder.AddColumn<int>(
                name: "HallId",
                table: "Seats",
                type: "int",
                nullable: true);

            migrationBuilder.AddColumn<int>(
                name: "Column",
                table: "Halls",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateIndex(
                name: "IX_Seats_HallId",
                table: "Seats",
                column: "HallId");

            migrationBuilder.AddForeignKey(
                name: "FK_Seats_Halls_HallId",
                table: "Seats",
                column: "HallId",
                principalTable: "Halls",
                principalColumn: "Id");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Seats_Halls_HallId",
                table: "Seats");

            migrationBuilder.DropIndex(
                name: "IX_Seats_HallId",
                table: "Seats");

            migrationBuilder.DropColumn(
                name: "HallId",
                table: "Seats");

            migrationBuilder.DropColumn(
                name: "Column",
                table: "Halls");

            migrationBuilder.RenameColumn(
                name: "Row",
                table: "Halls",
                newName: "Capacity");

            migrationBuilder.AddColumn<int>(
                name: "Column",
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
    }
}
