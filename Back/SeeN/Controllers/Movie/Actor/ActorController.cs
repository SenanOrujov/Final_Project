﻿using AutoMapper;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using SeeN.Data;
using SeeN.DTOs.Movie.Actor;

namespace SeeN.Controllers.Movie.Actor
{
    [Route("api/[controller]")]
    [ApiController]
    public class ActorController : ControllerBase
    {
        private readonly AppDbContext _context;
        private readonly IMapper _mapper;

        public ActorController(AppDbContext context, IMapper mapper)
        {
            _context = context;
            _mapper = mapper;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ActorGetDto>>> GetAllActor()
        {
            var actors = await _context.Actors
             .Select(x => _mapper.Map<SeeN.Entities.Actor, ActorGetDto>(x))
             .ToListAsync();

            if (!actors.Any()) return NoContent(); // HTTP 204 No Content

            return Ok(actors);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ActorGetDto>> GetActor(int id)
        {
            var actor = await _context.Actors.FindAsync(id);
            if (actor == null) return NotFound();


            var ActorDto = _mapper.Map<SeeN.Entities.Actor, ActorGetDto>(actor);
            return Ok(ActorDto);
        }

        [HttpPost]
        public async Task<ActionResult<ActorDto>> CreateActor(ActorDto dto)
        {
            var actor = _mapper.Map<ActorDto, SeeN.Entities.Actor>(dto);
            _context.Actors.Add(actor);
            await _context.SaveChangesAsync();

            var actorDto = _mapper.Map<ActorGetDto>(actor);
            return Ok(actorDto);

        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateActor(int id, ActorDto dto)
        {
            var actor = await _context.Actors.FindAsync(id);
            if (actor == null) return NotFound();

            _mapper.Map(dto, actor);

            await _context.SaveChangesAsync();

            return Ok(actor);
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteActor(int id)
        {
            var actor = await _context.Actors.FindAsync(id);

            if (actor == null) return NotFound();


            _context.Actors.Remove(actor);
            await _context.SaveChangesAsync();

            return Ok();
        }
    }
}
