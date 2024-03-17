using FluentValidation;
using FluentValidation.AspNetCore;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.OpenApi.Models;
using SeeN.Data;
using SeeN.Entities;
using System;

namespace SeeN.Helpers
{
    public static class InjectionHelper
    {
        public static void AddAppServices(this IServiceCollection services, WebApplicationBuilder builder)
        {
            builder.Services.AddEndpointsApiExplorer();
            builder.Services.AddSwaggerGen();

            builder.Services.AddDbContext<AppDbContext>(opt =>
            {
                opt.UseSqlServer(builder.Configuration.GetConnectionString("Default"));
            });

            builder.Services.AddAuthorization();

            builder.Services.AddIdentityApiEndpoints<AppUser>()
                .AddEntityFrameworkStores<AppDbContext>();

            //Auto mapper config 
            builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

            //For loop handling 
            builder.Services.AddControllers().AddNewtonsoftJson(options =>
            {
                options.SerializerSettings.ReferenceLoopHandling = Newtonsoft.Json.ReferenceLoopHandling.Ignore;
            });

            // Swagger config
            builder.Services.AddSwaggerGen();

            //Fuluent validation config
            builder.Services.AddFluentValidationAutoValidation()
                    .AddFluentValidationClientsideAdapters()
                    .AddValidatorsFromAssemblyContaining<Program>();
        }
    }
}
