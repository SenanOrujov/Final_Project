using Microsoft.AspNetCore.Identity;
using SeeN.Entities;


namespace SeeN.Helpers
{
    public static class RoleHelper
    {
        public static async Task SeedAdminUser(IServiceProvider services)
        {
            using var scope = services.CreateScope();
            var userManager = scope.ServiceProvider.GetRequiredService<UserManager<AppUser>>();
            var roleManager = scope.ServiceProvider.GetRequiredService<RoleManager<IdentityRole>>();


            if (!await roleManager.RoleExistsAsync("Admin"))
            {
                await roleManager.CreateAsync(new IdentityRole("Admin"));
            }

            if (!await roleManager.RoleExistsAsync("User"))
            {
                await roleManager.CreateAsync(new IdentityRole("User"));
            }

            var adminUser = await userManager.FindByEmailAsync("admin@gmail.com");

            if (adminUser == null)
            {
                adminUser = new AppUser
                {
                    Email = "admin@gmail.com",
                    City = "Baku",
                    FirstName = "Admin",
                    LastName = "Admin",
                    UserName = "admin"
                };

                var result = await userManager.CreateAsync(adminUser, "admin123");

                if (result.Succeeded)
                {
                    await userManager.AddToRoleAsync(adminUser, "Admin");
                }
            }
        }
    }
}
