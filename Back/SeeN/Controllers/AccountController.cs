using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using SeeN.DTOs.Account;
using SeeN.Entities;
using SeeN.Migrations;
using System.Data;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace SeeN.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private readonly UserManager<AppUser> _userManager;
        private readonly SignInManager<AppUser> _signInManager;
        private readonly IConfiguration _configuration;
        private readonly IMapper _mapper;

        public AccountController(UserManager<AppUser> userManager,
            SignInManager<AppUser> signInManager, IConfiguration configuration, IMapper mapper)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _mapper = mapper;
        }

        [HttpPost("Login")]
        public async Task<IActionResult> Login([FromBody] LoginDto dto)
        {
            var user = await _userManager.FindByEmailAsync(dto.Email);
            if (user == null) return BadRequest(new { Error = "Invalid email or password" });


            var loginResult = await _signInManager.PasswordSignInAsync(user.UserName, dto.Password, false, false);

            if (!loginResult.Succeeded) return BadRequest(new { Error = "Invalid username or password" });

            var userRoles = await _userManager.GetRolesAsync(user);
            string userRole = userRoles.FirstOrDefault();

            return Ok(new { Token = CreateToken(user.Email, userRole) });
        }

        [HttpPost("Register")]
        public async Task<IActionResult> Register([FromBody] RegisterDto dto)
        {
            var userName = CreateUsername(dto.FirstName, dto.LastName);
            var newUser = _mapper.Map<AppUser>(dto);
            newUser.UserName = userName;

            var result = await _userManager.CreateAsync(newUser, dto.Password);


            if (!result.Succeeded) return BadRequest(result.Errors);

            await _userManager.AddToRoleAsync(newUser, "User");

            return Ok(newUser.Id);
        }

        private string CreateToken(string email, string role)
        {
            var authSigningKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));

            var token = new JwtSecurityToken(
                expires: DateTime.Now.AddMinutes(60),
            claims: new List<Claim> {
                new Claim(ClaimTypes.Email, email),
               new Claim(ClaimTypes.Role, role),
            },
                signingCredentials: new SigningCredentials(authSigningKey, SecurityAlgorithms.HmacSha256));

            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private string CreateUsername(string firstName, string lastName)
        {
            var modifiedLastName = lastName.ToLower();
            var baseUserName = firstName.ToLower() + modifiedLastName;

            return baseUserName;
        }

    }
}
