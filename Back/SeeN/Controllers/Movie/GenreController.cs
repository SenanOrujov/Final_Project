using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeeN.Data;
using SeeN.DTOs.Hall.HallType;
using SeeN.DTOs.Movie.Genre;
using SeeN.Entities;
using System.CodeDom;

namespace SeeN.Controllers.Movie
{
    [Route("api/[controller]")]
    [ApiController]
    public class GenreController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public GenreController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<GenreGetDto>>> GetAllGenres()
        {
            var genres = await _context.Genres
             .Select(x => _mapper.Map<Genre, GenreGetDto>(x))
             .ToListAsync();

            if (!genres.Any()) return NoContent(); // HTTP 204 No Content

            return Ok(genres);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<GenreGetDto>> GetGenre(int id)
        {
            var genre = await _context.Genres.FindAsync(id);
            if (genre == null) return NotFound();


            var genreDto = _mapper.Map<Genre, GenreGetDto>(genre);
            return Ok(genreDto);
        }

        [HttpPost]
        public async Task<ActionResult<GenreDto>> CreateGenre(GenreDto dto)
        {
            var genre = _mapper.Map<GenreDto, Genre>(dto);
            _context.Genres.Add(genre);
            await _context.SaveChangesAsync();

            var genreDto = _mapper.Map<GenreGetDto>(genre);
            return Ok(genreDto);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGenre(int id, GenreDto dto)
        {
            var genre = await _context.Genres.FindAsync(id);
            if (genre == null) return NotFound();

            _mapper.Map(dto, genre);

            await _context.SaveChangesAsync();

            return Ok(genre);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGenre(int id)
        {
            var genre = await _context.Genres.FindAsync(id);

            if (genre == null) return NotFound();


            _context.Genres.Remove(genre);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }


}
