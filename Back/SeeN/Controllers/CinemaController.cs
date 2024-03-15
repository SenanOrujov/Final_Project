using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using SeeN.Data;
using SeeN.DTOs.Cinema;
using SeeN.DTOs.Hall.HallType;
using SeeN.Entities;

namespace SeeN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CinemaController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public CinemaController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<CinemaGetDto>>> GetAllCinemas()
        {
            var cinemas = await _context.Cinemas
                .Include(c => c.CinemaHours)
                .Include(c => c.Halls)
                .AsNoTracking()
                .ToListAsync();

            if (!cinemas.Any()) return NoContent(); // HTTP 204 No Content

            var cinemaDtos = _mapper.Map<IEnumerable<CinemaGetDto>>(cinemas);
            return Ok(cinemaDtos);

        }

        [HttpPost]
        public async Task<ActionResult<CinemaPostDto>> CreateCinema(CinemaPostDto dto)
        {
            var cinema = _mapper.Map<CinemaPostDto, Cinema>(dto);
            _context.Cinemas.Add(cinema);
            await _context.SaveChangesAsync();

            var cinemaGet = _mapper.Map<CinemaGetDto>(cinema);
            return Ok(cinemaGet);
        }
    }
}
