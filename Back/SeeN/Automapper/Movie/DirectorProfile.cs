using AutoMapper;
using SeeN.DTOs.Movie.Actor;
using SeeN.DTOs.Movie.Director;
using SeeN.Entities;

namespace SeeN.Automapper.Movie
{
    public class DirectorProfile : Profile
    {
        public DirectorProfile()
        {
            CreateMap<Director, DirectorGetDto>().ReverseMap();
            CreateMap<DirectorDto, Director>();
        }
    }
}
