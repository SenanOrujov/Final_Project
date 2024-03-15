namespace SeeN.Entities
{
    public class Director
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string PhotoUrl { get; set; }
        public string ImdbLink { get; set; }
        public List<Movie> Movies { get; set; }
    }
}
