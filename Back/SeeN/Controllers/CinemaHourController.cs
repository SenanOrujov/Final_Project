using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeeN.Data;
using SeeN.DTOs.Cinema.CinemaHour;
using SeeN.Entities;

namespace SeeN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CinemaHourController : ControllerBase
    {
        private readonly AppDbContext _context;

        public CinemaHourController(AppDbContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult> CreateCinemaHours([FromBody] CinemaHourPostDto dto)
        {
            if (dto.DailySchedules.Count > 7)
            {
                return BadRequest("You can enter a maximum 7-day programme.");
            }

            foreach (var schedule in dto.DailySchedules)
            {
                if (!Enum.IsDefined(typeof(DayOfWeek), schedule.DayOfWeek))
                {
                    return BadRequest("It has an invalid day value.");
                }

                var cinemaHour = new CinemaHour
                {
                    CinemaId = dto.CinemaId,
                    DayOfWeek = (int)schedule.DayOfWeek,
                    OpeningTime = schedule.OpeningTime,
                    ClosingTime = schedule.ClosingTime,
                    IsClosed = schedule.IsClosed
                };

                _context.CinemaHours.Add(cinemaHour);
            }


            try
            {
                await _context.SaveChangesAsync();
                return CreatedAtAction(nameof(CreateCinemaHours), new { cinemaId = dto.CinemaId }, dto);
            }
            catch (Exception ex)
            {

                return StatusCode(StatusCodes.Status500InternalServerError, ex.Message);
            }
        }
    }
}
