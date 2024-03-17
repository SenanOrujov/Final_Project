using SeeN.DTOs.Cinema.CinemaHour;
using SeeN.DTOs.Hall;

namespace SeeN.DTOs.Cinema
{
    public class CinemaGetDto
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public List<CinemaHourGetDto> CinemaHours { get; set; }
        public List<HallGetDto> Halls { get; set; }
    }
}
