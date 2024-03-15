namespace SeeN.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public DateOnly Year { get; set; }
        public TimeOnly Duration { get; set; }
        public int GenreId { get; set; }
        public Genre Genre { get; set; }
        public int LanguageId { get; set; }
        public Language Language { get; set; }
        public string Description { get; set; }
        public string TrailerUrl { get; set; }
        public int DirectorId { get; set; }
        public Director Director { get; set; }
        public List<MovieShow> Shows { get; set; }

        public List<MovieActor> Actors { get; set; }
    }
}
