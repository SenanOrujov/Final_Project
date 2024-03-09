namespace SeeN.Entities
{
    public class Movie
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public TimeSpan Duration { get; set; }
        public string Genre { get; set; }
        public string Language { get; set; }
        public string Description { get; set; }
        public string TrailerUrl { get; set; }
        public ICollection<Hall> Halls { get; set; }
        public ICollection<MovieShow> Shows { get; set; }
        public int DirectorId { get; set; }
        public Director Director { get; set; }

        public ICollection<MovieActor> Actors { get; set; }
    }
}
