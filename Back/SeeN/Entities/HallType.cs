using System.ComponentModel.DataAnnotations.Schema;

namespace SeeN.Entities
{
    public class HallType
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Description { get; set; }

        [Column(TypeName = "decimal(18,4)")]
        public decimal Price { get; set; }
        public List<Hall> Halls { get; set; }
    }
}
