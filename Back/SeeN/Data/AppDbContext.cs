using Microsoft.EntityFrameworkCore;
using SeeN.Entities;

namespace SeeN.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }
        public DbSet<Cinema> Cinemas { get; set; }
        public DbSet<CinemaHour> CinemaHours { get; set; }
    }
}
