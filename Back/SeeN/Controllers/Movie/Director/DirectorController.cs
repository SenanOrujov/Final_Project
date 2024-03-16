using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeeN.Data;
using SeeN.DTOs.Movie.Director;

namespace SeeN.Controllers.Movie.Director
{
    [Route("api/[controller]")]
    [ApiController]
    public class DirectorController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public DirectorController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<DirectorGetDto>>> GetAllDirector()
        {
            var directors = await _context.Directors
             .Select(x => _mapper.Map<SeeN.Entities.Director, DirectorGetDto>(x))
             .ToListAsync();

            if (!directors.Any()) return NoContent(); // HTTP 204 No Content

            return Ok(directors);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<DirectorGetDto>> GetDirector(int id)
        {
            var director = await _context.Directors.FindAsync(id);
            if (director == null) return NotFound();


            var directorDto = _mapper.Map<SeeN.Entities.Director, DirectorGetDto>(director);
            return Ok(directorDto);
        }

        [HttpPost]
        public async Task<ActionResult<DirectorDto>> CreateDirector(DirectorDto dto)
        {
            var director = _mapper.Map<DirectorDto, SeeN.Entities.Director>(dto);
            _context.Directors.Add(director);
            await _context.SaveChangesAsync();

            var directorDto = _mapper.Map<DirectorGetDto>(director);
            return Ok(directorDto);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateDirector(int id, DirectorDto dto)
        {
            var director = await _context.Directors.FindAsync(id);
            if (director == null) return NotFound();

            _mapper.Map(dto, director);

            await _context.SaveChangesAsync();

            return Ok(director);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteDirector(int id)
        {
            var director = await _context.Directors.FindAsync(id);

            if (director == null) return NotFound();


            _context.Directors.Remove(director);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
