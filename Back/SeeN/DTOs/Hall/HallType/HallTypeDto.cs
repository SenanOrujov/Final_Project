using FluentValidation;

namespace SeeN.DTOs.Hall.HallType
{
    public class HallTypeDto
    {
        public string Name { get; set; }
        public string Description { get; set; }
        public decimal Price { get; set; }
    }

    public class HallTypeDtoValidator : AbstractValidator<HallTypeDto>
    {
        public HallTypeDtoValidator()
        {
            RuleFor(x => x.Name).NotEmpty().WithMessage("Hall type name is required").MaximumLength(30)
                .WithMessage("Hall type name cannot exceed 30 characters");
            RuleFor(x => x.Price).NotEmpty().WithMessage("Price  is required")
                .GreaterThan(0).WithMessage("Price must be greater than zero!");
            RuleFor(x => x.Description).MaximumLength(250).WithMessage("Description cannot exceed 250 characters");
        }
    }
}
