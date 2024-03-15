using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Microsoft.VisualBasic;
using SeeN.Data;
using SeeN.DTOs.Hall.HallType;
using SeeN.Entities;

namespace SeeN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class HallTypeController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public HallTypeController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        // GET /api/halltype
        [HttpGet]
        public async Task<ActionResult<IEnumerable<HallTypeGetDto>>> GetAllHallTypes()
        {
            var hallTypes = await _context.HallTypes
                .Select(x => _mapper.Map<HallType, HallTypeGetDto>(x))
                .ToListAsync();

            if (!hallTypes.Any()) return NoContent(); // HTTP 204 No Content

            return Ok(hallTypes);
        }

        // GET api/halltype/{id}
        [HttpGet("{id}")]
        public async Task<ActionResult<HallTypeGetDto>> GetHallType(int id)
        {
            var hallType = await _context.HallTypes.FindAsync(id);
            if (hallType == null) return NotFound();


            var hallTypeDto = _mapper.Map<HallType, HallTypeGetDto>(hallType);
            return Ok(hallTypeDto);
        }

        // POST api/halltype
        [HttpPost]
        public async Task<ActionResult<HallTypeDto>> CreateHallType(HallTypeDto dto)
        {
            var hallType = _mapper.Map<HallTypeDto, HallType>(dto);
            _context.HallTypes.Add(hallType);
            await _context.SaveChangesAsync();

            var hallTypeGet = _mapper.Map<HallTypeDto>(hallType);
            return Ok(hallTypeGet);

        }

        // PUT api/halltype/{id}
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHallType(int id, HallTypeDto dto)
        {
            var hallType = await _context.HallTypes.FindAsync(id);
            if (hallType == null) return NotFound();

            _mapper.Map(dto, hallType);

            await _context.SaveChangesAsync();

            return Ok(hallType);
        }

        // DELETE api/halltype/{id}
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHallType(int id)
        {
            var hallType = await _context.HallTypes.FindAsync(id);

            if (hallType == null) return NotFound();


            _context.HallTypes.Remove(hallType);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
