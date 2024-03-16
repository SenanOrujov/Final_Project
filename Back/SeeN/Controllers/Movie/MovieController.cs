using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeeN.Data;
using SeeN.DTOs.Movie;
using SeeN.DTOs.Movie.Director;

namespace SeeN.Controllers.Movie
{
    [Route("api/[controller]")]
    [ApiController]
    public class MovieController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        // GET: api/Movie
        [HttpGet]
        public async Task<ActionResult<IEnumerable<MovieGetDto>>> GetMovies()
        {
            var movies = await _context.Movies
                .Include(m => m.Genre)
                .Include(m => m.Language)
                .Include(m => m.Director)
                .ToListAsync();
            if (movies == null) return NoContent();

            var movieDtos = _mapper.Map<IEnumerable<MovieGetDto>>(movies);
            return Ok(movieDtos);
        }

        // GET: api/Movie/5
        [HttpGet("{id}")]
        public async Task<ActionResult<MovieGetDto>> GetMovie(int id)
        {
            var movie = await _context.Movies
                // İlgili alanları ekle
                .Include(m => m.Genre)
                .Include(m => m.Language)
                .Include(m => m.Director)
                .Include(m => m.Actors)
                .Include(m => m.Shows)
                .FirstOrDefaultAsync(m => m.Id == id);

            if (movie == null)
            {
                return NotFound();
            }

            var movieDto = _mapper.Map<MovieGetDto>(movie);
            return movieDto;
        }

        // POST: api/Movie
        [HttpPost]
        public async Task<ActionResult<MovieGetDto>> PostMovie(MoviePostDto movieDto)
        {
            var movie = _mapper.Map<SeeN.Entities.Movie>(movieDto);
            _context.Movies.Add(movie);
            await _context.SaveChangesAsync();

            var movieGetDto = _mapper.Map<MovieGetDto>(movie);
            return Ok(movieGetDto);
        }

        // PUT: api/Movie/5
        [HttpPut("{id}")]
        public async Task<IActionResult> PutMovie(int id, MoviePutDto movieDto)
        {
            var movie = await _context.Movies.FindAsync(id);

            if (movie == null)
            {
                return NotFound();
            }

            _mapper.Map(movieDto, movie);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        // DELETE: api/Movie/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteMovie(int id)
        {
            var movie = await _context.Movies.FindAsync(id);
            if (movie == null)
            {
                return NotFound();
            }

            _context.Movies.Remove(movie);
            await _context.SaveChangesAsync();

            return NoContent();
        }

    }
}
