using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SeeN.Migrations
{
    /// <inheritdoc />
    public partial class cinemahour_datetime : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "ImdbLink",
                table: "Directors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PhotoUrl",
                table: "Directors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AlterColumn<DateTime>(
                name: "OpeningTime",
                table: "CinemaHours",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(TimeSpan),
                oldType: "time",
                oldNullable: true);

            migrationBuilder.AlterColumn<DateTime>(
                name: "ClosingTime",
                table: "CinemaHours",
                type: "datetime2",
                nullable: true,
                oldClrType: typeof(TimeSpan),
                oldType: "time",
                oldNullable: true);

            migrationBuilder.AddColumn<string>(
                name: "ImdbLink",
                table: "Actors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "PhotoUrl",
                table: "Actors",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "ImdbLink",
                table: "Directors");

            migrationBuilder.DropColumn(
                name: "PhotoUrl",
                table: "Directors");

            migrationBuilder.DropColumn(
                name: "ImdbLink",
                table: "Actors");

            migrationBuilder.DropColumn(
                name: "PhotoUrl",
                table: "Actors");

            migrationBuilder.AlterColumn<TimeSpan>(
                name: "OpeningTime",
                table: "CinemaHours",
                type: "time",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);

            migrationBuilder.AlterColumn<TimeSpan>(
                name: "ClosingTime",
                table: "CinemaHours",
                type: "time",
                nullable: true,
                oldClrType: typeof(DateTime),
                oldType: "datetime2",
                oldNullable: true);
        }
    }
}
