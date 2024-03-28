using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using SeeN.Data;

namespace SeeN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ImageController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ImageController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        [HttpGet("images/{imageName}")]
        public async Task<IActionResult> GetImage(string imageName)
        {
            var imagePath = Path.Combine(_configuration["ImageStoragePath"], imageName);
            if (!System.IO.File.Exists(imagePath))
                return NotFound();

            var image = System.IO.File.ReadAllBytes(imagePath);
            return File(image, "image/jpeg");
        }
    }

}
