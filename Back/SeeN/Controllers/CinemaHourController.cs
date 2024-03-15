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

    }
}
