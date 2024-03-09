namespace SeeN.Entities
{
    public class HallType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        public ICollection<Hall> Halls { get; set; }
    }
}
