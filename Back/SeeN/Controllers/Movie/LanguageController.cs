using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeeN.Data;
using SeeN.DTOs.Movie.Genre;
using SeeN.DTOs.Movie.Language;
using SeeN.Entities;

namespace SeeN.Controllers.Movie
{
    [Route("api/[controller]")]
    [ApiController]
    public class LanguageController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public LanguageController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<LanguageGetDto>>> GetAllLanguage()
        {
            var language = await _context.Languages
             .Select(x => _mapper.Map<Language, LanguageGetDto>(x))
             .ToListAsync();

            if (!language.Any()) return NoContent(); // HTTP 204 No Content

            return Ok(language);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<LanguageGetDto>> GetLanguage(int id)
        {
            var language = await _context.Languages.FindAsync(id);
            if (language == null) return NotFound();


            var languageDto = _mapper.Map<Language, LanguageGetDto>(language);
            return Ok(languageDto);
        }

        [HttpPost]
        public async Task<ActionResult<LanguageDto>> CreateLanguage(LanguageDto dto)
        {
            var language = _mapper.Map<LanguageDto, Language>(dto);
            _context.Languages.Add(language);
            await _context.SaveChangesAsync();

            var languageDto = _mapper.Map<LanguageGetDto>(language);
            return Ok(languageDto);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateLanguage(int id, LanguageDto dto)
        {
            var language = await _context.Languages.FindAsync(id);
            if (language == null) return NotFound();

            _mapper.Map(dto, language);

            await _context.SaveChangesAsync();

            return Ok(language);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteLanguage(int id)
        {
            var language = await _context.Languages.FindAsync(id);

            if (language == null) return NotFound();


            _context.Languages.Remove(language);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
