namespace SeeN.DTOs.Cinema.CinemaHour
{
    public class CinemaHourPostDto
    {
        public int DayOfWeek { get; set; }
        public bool IsClosed { get; set; }
        public DateTime? OpeningTime { get; set; }
        public DateTime? ClosingTime { get; set; }
    }
}
