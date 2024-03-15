using AutoMapper;
using SeeN.DTOs.Movie.Genre;

namespace SeeN.Automapper.Movie
{
    public class GenreProfile : Profile
    {
        public GenreProfile()
        {
            CreateMap<SeeN.Entities.Genre, GenreGetDto>().ReverseMap();
            CreateMap<GenreDto, SeeN.Entities.Genre>();
        }
    }
}
