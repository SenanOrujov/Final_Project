using AutoMapper;
using SeeN.DTOs.Hall.HallType;
using SeeN.Entities;

namespace SeeN.Automapper.Hall.HallType
{
    public class HallTypeProfile : Profile
    {
        public HallTypeProfile()
        {
            CreateMap<SeeN.Entities.HallType, HallTypeGetDto>();
            CreateMap<HallTypeDto, SeeN.Entities.HallType>();
        }
    }
}
