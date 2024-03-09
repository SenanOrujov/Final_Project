namespace SeeN.Entities
{
    public class Cinema
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public ICollection<CinemaHour> CinemaHours { get; set; }

    }
}
