using AutoMapper;
using SeeN.DTOs.Movie.Actor;
using SeeN.DTOs.Movie.Genre;
using SeeN.Entities;

namespace SeeN.Automapper.Movie
{
    public class ActorProfile : Profile
    {
        public ActorProfile()
        {
            CreateMap<Actor, ActorGetDto>().ReverseMap();
            CreateMap<ActorDto, Actor>();
        }
    }
}
