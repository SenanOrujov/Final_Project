namespace SeeN.Entities
{
    public class CinemaMovie
    {
        public int Id { get; set; }
        public int CinemaId { get; set; }
        public int MovieId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public Cinema Cinema { get; set; }
        public Movie Movie { get; set; }
    }
}
