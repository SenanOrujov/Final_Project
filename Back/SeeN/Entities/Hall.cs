namespace SeeN.Entities
{
    public class Hall
    {
        public int Id { get; set; }
        public int CinemaId { get; set; }
        public int HallTypeId { get; set; }
        public string Name { get; set; }
        public int Capacity { get; set; }

        public Cinema Cinema { get; set; }
        public HallType HallType { get; set; }
    }
}
