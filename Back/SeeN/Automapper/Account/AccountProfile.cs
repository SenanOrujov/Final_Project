using AutoMapper;
using SeeN.DTOs.Account;
using SeeN.Entities;

namespace SeeN.Automapper.Account
{
    public class AccountProfile : Profile
    {
        public AccountProfile()
        {
            CreateMap<RegisterDto, AppUser>();
        }
    }
}
