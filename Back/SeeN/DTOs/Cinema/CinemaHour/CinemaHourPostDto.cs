namespace SeeN.DTOs.Cinema.CinemaHour
{
    public class CinemaHourPostDto
    {
        public int CinemaId { get; set; }
        public List<DailySchedule> DailySchedules { get; set; }
    }

    public class DailySchedule
    {
        public DayOfWeek DayOfWeek { get; set; }
        public TimeSpan? OpeningTime { get; set; }
        public TimeSpan? ClosingTime { get; set; }
        public bool IsClosed { get; set; }

        public void Validate()
        {
            if (OpeningTime > ClosingTime && !IsClosed)
            {
                throw new ArgumentException("The opening time must be before the closing time or the hall must be closed.");
            }
        }
    }
}
