using FluentValidation;
using SeeN.DTOs.Hall.Seat;

namespace SeeN.DTOs.Hall
{
    public class HallPostDto
    {
        public string Name { get; set; }
        public int Capacity { get; set; }
        public int HallTypeId { get; set; }
        public int Row { get; set; }
        public int Collum { get; set; }

        public List<SeatPostDto> Seats { get; set; }
    }
    public class HallPostDtoValidator : AbstractValidator<HallPostDto>
    {
        public HallPostDtoValidator()
        {
            RuleFor(x => x.Name)
                .NotEmpty().WithMessage("Hall name is required")
                .MaximumLength(100).WithMessage("Hall name cannot exceed 100 characters");

            RuleFor(x => x.Capacity)
                .NotEmpty().WithMessage("Capacity is required")
                .GreaterThan(0).WithMessage("Capacity must be greater than zero");

            RuleFor(x => x.HallTypeId)
                .NotEmpty().WithMessage("Hall Type ID is required")
                .GreaterThan(0).WithMessage("Hall Type ID must be a valid positive number");
            RuleFor(x => x.Row)
                .NotEmpty().WithMessage("Row is required")
                .GreaterThan(0).WithMessage("Row must be a valid positive number");
            RuleFor(x => x.Collum)
                .NotEmpty().WithMessage("Collum is required")
                .GreaterThan(0).WithMessage("Collum must be a valid positive number");
        }
    }
}
