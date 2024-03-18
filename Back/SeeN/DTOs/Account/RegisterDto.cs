using FluentValidation;

namespace SeeN.DTOs.Account
{
    public class RegisterDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Email { get; set; }
        public string City { get; set; }
        public string Password { get; set; }
    }

    public class RegisterDtoValidator : AbstractValidator<RegisterDto>
    {
        public RegisterDtoValidator()
        {
            RuleFor(x => x.Email)
                .NotEmpty()
                .WithMessage("Email is required!");
            RuleFor(x => x.FirstName)
                .NotEmpty()
                .WithMessage("Firstname is required!");

            RuleFor(x => x.LastName)
                .NotEmpty()
                .WithMessage("Lastname is required!");

            RuleFor(x => x.Password)
                .NotEmpty()
                .WithMessage("Password is required!")
                .MinimumLength(3)
                .WithMessage("Should contain at least 3 characters!");

            RuleFor(x => x.City)
                .NotEmpty()
                .WithMessage("City name  is required!");
        }
    }
}
