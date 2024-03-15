using AutoMapper;
using SeeN.DTOs.Cinema;
using SeeN.DTOs.Cinema.CinemaHour;
using SeeN.Entities;

namespace SeeN.Automapper.Cinema
{
    public class CinemaHourProfile : Profile
    {
        public CinemaHourProfile()
        {
            CreateMap<CinemaHourPostDto, CinemaHour>();
            CreateMap<CinemaHour, CinemaHourGetDto>();
        }
    }
}
