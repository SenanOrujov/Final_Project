using SeeN.Enums;

namespace SeeN.DTOs.Hall.Seat
{
    public class SeatPostDto
    {
        public int Collum { get; set; }
        public int Row { get; set; }
        public SeatStatus Status { get; set; }
    }
}
