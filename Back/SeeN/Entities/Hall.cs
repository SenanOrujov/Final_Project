namespace SeeN.Entities
{
    public class Hall
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int CinemaId { get; set; }
        public int HallTypeId { get; set; }
        public int Row { get; set; }
        public int Column { get; set; }
        public List<Seat> Seats { get; set; }

        public Cinema Cinema { get; set; }
        public HallType HallType { get; set; }


    }
}
