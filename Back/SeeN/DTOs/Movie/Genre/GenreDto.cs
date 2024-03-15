using FluentValidation;
using SeeN.DTOs.Hall;

namespace SeeN.DTOs.Movie.Genre
{
    public class GenreDto
    {
        public string Name { get; set; }
    }

    public class GenreDtoValidator : AbstractValidator<GenreDto>
    {
        public GenreDtoValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Genre name is required")
                .MaximumLength(20).WithMessage("Genre name cannot exceed 20 characters");
        }
    }
}
