namespace SeeN.Entities
{
    public class MovieShow
    {
        public int Id { get; set; }
        public int MovieId { get; set; }
        public int HallId { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }

        public Movie Movie { get; set; }
        public Hall Hall { get; set; }
    }
}
