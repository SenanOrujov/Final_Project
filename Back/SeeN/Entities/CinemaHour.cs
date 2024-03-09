namespace SeeN.Entities
{
    public class CinemaHour
    {
        public int Id { get; set; }
        public int CinemaId { get; set; }
        public int DayOfWeek { get; set; }
        public TimeSpan? OpeningTime { get; set; }
        public TimeSpan? ClosingTime { get; set; }
        public bool IsClosed { get; set; }

        public Cinema Cinema { get; set; }
    }
}
