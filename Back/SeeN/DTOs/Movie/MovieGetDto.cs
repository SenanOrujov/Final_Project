using SeeN.DTOs.Movie.Actor.MovieActor;
using SeeN.DTOs.Movie.Show;

namespace SeeN.DTOs.Movie
{
    public class MovieGetDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateOnly Year { get; set; }
        public TimeOnly Duration { get; set; }
        public int GenreId { get; set; }
        public int LanguageId { get; set; }
        public string Description { get; set; }
        public string TrailerUrl { get; set; }
        public int DirectorId { get; set; }
        public List<MovieShowPostDto> Shows { get; set; }

        public List<MovieActorPostDto> Actors { get; set; }
    }
}
