using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using SeeN.Entities;

namespace SeeN.Data
{
    public class AppDbContext : IdentityDbContext<AppUser>
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Cinema> Cinemas { get; set; }
        public DbSet<CinemaHour> CinemaHours { get; set; }
        public DbSet<Actor> Actors { get; set; }
        public DbSet<Director> Directors { get; set; }
        public DbSet<Hall> Halls { get; set; }
        public DbSet<HallType> HallTypes { get; set; }
        public DbSet<Movie> Movies { get; set; }
        public DbSet<MovieActor> MovieActors { get; set; }
        public DbSet<MovieShow> MovieShows { get; set; }
        public DbSet<Seat> Seats { get; set; }
        public DbSet<Genre> Genres { get; set; }
        public DbSet<Language> Languages { get; set; }
        public DbSet<CinemaMovie> cinemaMovies { get; set; }
    }
}
