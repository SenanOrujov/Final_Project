using AutoMapper;
using SeeN.DTOs.Cinema;
using SeeN.Entities;

namespace SeeN.Automapper.Cinema
{
    public class CinemaProfile : Profile
    {
        public CinemaProfile()
        {
            CreateMap<SeeN.Entities.Cinema, CinemaGetDto>();
            CreateMap<CinemaPostDto, SeeN.Entities.Cinema>();
        }
    }
}
