using SeeN.DTOs.Cinema.CinemaHour;
using SeeN.DTOs.Hall;
using SeeN.Entities;

namespace SeeN.DTOs.Cinema
{
    public class CinemaPostDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public string City { get; set; }
        public string Phone { get; set; }
        public string Address { get; set; }
        public List<CinemaHourPostDto> CinemaHours { get; set; }
        public List<HallPostDto> Halls { get; set; }
    }
}
