namespace SeeN.DTOs.Cinema.CinemaHour
{
    public class CinemaHourGetDto
    {
        public int Id { get; set; }
        public int DayOfWeek { get; set; }
        public bool IsClosed { get; set; }
        public TimeSpan OpeningTime { get; set; }
        public TimeSpan ClosingTime { get; set; }
    }

}
