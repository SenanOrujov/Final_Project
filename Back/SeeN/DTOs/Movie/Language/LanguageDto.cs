using FluentValidation;
using SeeN.DTOs.Movie.Genre;

namespace SeeN.DTOs.Movie.Language
{
    public class LanguageDto
    {
        public string Name { get; set; }
    }

    public class LanguageDtoValidator : AbstractValidator<LanguageDto>
    {
        public LanguageDtoValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Language name is required")
                .MaximumLength(30).WithMessage("Language name cannot exceed 30 characters");
        }
    }
}
