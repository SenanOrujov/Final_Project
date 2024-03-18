using FluentValidation;

namespace SeeN.DTOs.Account
{
    public class LoginDto
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }

    public class LoginDtoValidator : AbstractValidator<LoginDto>
    {
        public LoginDtoValidator()
        {
            RuleFor(x => x.Email)
                .NotEmpty()
                .WithMessage("Email is required!");

            RuleFor(x => x.Password)
                .NotEmpty()
                .WithMessage("Password is required!")
                .MinimumLength(3)
                .WithMessage("Should contain at least 3 characters!");
        }
    }
}
