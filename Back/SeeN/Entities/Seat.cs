using SeeN.Enums;

namespace SeeN.Entities
{
    public class Seat
    {
        public int Id { get; set; }
        public int Collum { get; set; }
        public int Row { get; set; }
        public SeatStatus Status { get; set; }
    }
}
