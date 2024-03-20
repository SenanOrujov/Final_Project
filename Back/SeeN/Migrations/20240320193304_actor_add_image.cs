using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SeeN.Migrations
{
    /// <inheritdoc />
    public partial class actor_add_image : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImageFilename",
                table: "Actors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImageFilename",
                table: "Actors");
        }
    }
}
