using AutoMapper;
using SeeN.DTOs.Movie.Language;

namespace SeeN.Automapper.Movie
{
    public class LanguageProfile : Profile
    {
        public LanguageProfile()
        {
            CreateMap<SeeN.Entities.Language, LanguageGetDto>().ReverseMap();
            CreateMap<LanguageDto, SeeN.Entities.Language>();

        }
    }
}
