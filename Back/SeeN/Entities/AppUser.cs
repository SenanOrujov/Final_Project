using Microsoft.AspNetCore.Identity;

namespace SeeN.Entities
{
    public class AppUser : IdentityUser
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string City { get; set; }
    }
}
