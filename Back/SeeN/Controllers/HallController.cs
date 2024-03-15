using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeeN.Data;
using SeeN.DTOs.Hall;
using SeeN.DTOs.Hall.HallType;
using SeeN.Entities;

namespace SeeN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HallController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public HallController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }


    }
}
