using AutoMapper;
using SeeN.DTOs.Hall;

namespace SeeN.Automapper.Hall
{
    public class HallProfile : Profile
    {
        public HallProfile()
        {
            CreateMap<HallPostDto, SeeN.Entities.Hall>();
            CreateMap<SeeN.Entities.Hall, HallGetDto>();
        }
    }
}
