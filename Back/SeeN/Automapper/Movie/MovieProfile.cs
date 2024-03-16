using AutoMapper;
using SeeN.DTOs.Movie;
using SeeN.Entities;

namespace SeeN.Automapper.Movie
{
    public class MovieProfile : Profile
    {
        public MovieProfile()
        {
            CreateMap<SeeN.Entities.Movie, MovieGetDto>().ReverseMap();
            CreateMap<MoviePostDto, SeeN.Entities.Movie>();
            CreateMap<MoviePutDto, SeeN.Entities.Movie>();


        }
    }
}
