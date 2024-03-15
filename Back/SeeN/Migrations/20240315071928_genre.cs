using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace SeeN.Migrations
{
    /// <inheritdoc />
    public partial class genre : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Halls_Movies_MovieId",
                table: "Halls");

            migrationBuilder.DropIndex(
                name: "IX_Halls_MovieId",
                table: "Halls");

            migrationBuilder.DropColumn(
                name: "Genre",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "Language",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "MovieId",
                table: "Halls");

            migrationBuilder.AddColumn<int>(
                name: "GenreId",
                table: "Movies",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.AddColumn<int>(
                name: "LanguageId",
                table: "Movies",
                type: "int",
                nullable: false,
                defaultValue: 0);

            migrationBuilder.CreateTable(
                name: "cinemaMovies",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CinemaId = table.Column<int>(type: "int", nullable: false),
                    MovieId = table.Column<int>(type: "int", nullable: false),
                    StartDate = table.Column<DateTime>(type: "datetime2", nullable: false),
                    EndDate = table.Column<DateTime>(type: "datetime2", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_cinemaMovies", x => x.Id);
                    table.ForeignKey(
                        name: "FK_cinemaMovies_Cinemas_CinemaId",
                        column: x => x.CinemaId,
                        principalTable: "Cinemas",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_cinemaMovies_Movies_MovieId",
                        column: x => x.MovieId,
                        principalTable: "Movies",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "Genres",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Genres", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "Languages",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Languages", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Movies_GenreId",
                table: "Movies",
                column: "GenreId");

            migrationBuilder.CreateIndex(
                name: "IX_Movies_LanguageId",
                table: "Movies",
                column: "LanguageId");

            migrationBuilder.CreateIndex(
                name: "IX_cinemaMovies_CinemaId",
                table: "cinemaMovies",
                column: "CinemaId");

            migrationBuilder.CreateIndex(
                name: "IX_cinemaMovies_MovieId",
                table: "cinemaMovies",
                column: "MovieId");

            migrationBuilder.AddForeignKey(
                name: "FK_Movies_Genres_GenreId",
                table: "Movies",
                column: "GenreId",
                principalTable: "Genres",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);

            migrationBuilder.AddForeignKey(
                name: "FK_Movies_Languages_LanguageId",
                table: "Movies",
                column: "LanguageId",
                principalTable: "Languages",
                principalColumn: "Id",
                onDelete: ReferentialAction.Cascade);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Movies_Genres_GenreId",
                table: "Movies");

            migrationBuilder.DropForeignKey(
                name: "FK_Movies_Languages_LanguageId",
                table: "Movies");

            migrationBuilder.DropTable(
                name: "cinemaMovies");

            migrationBuilder.DropTable(
                name: "Genres");

            migrationBuilder.DropTable(
                name: "Languages");

            migrationBuilder.DropIndex(
                name: "IX_Movies_GenreId",
                table: "Movies");

            migrationBuilder.DropIndex(
                name: "IX_Movies_LanguageId",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "GenreId",
                table: "Movies");

            migrationBuilder.DropColumn(
                name: "LanguageId",
                table: "Movies");

            migrationBuilder.AddColumn<string>(
                name: "Genre",
                table: "Movies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "Language",
                table: "Movies",
                type: "nvarchar(max)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<int>(
                name: "MovieId",
                table: "Halls",
                type: "int",
                nullable: true);

            migrationBuilder.CreateIndex(
                name: "IX_Halls_MovieId",
                table: "Halls",
                column: "MovieId");

            migrationBuilder.AddForeignKey(
                name: "FK_Halls_Movies_MovieId",
                table: "Halls",
                column: "MovieId",
                principalTable: "Movies",
                principalColumn: "Id");
        }
    }
}
