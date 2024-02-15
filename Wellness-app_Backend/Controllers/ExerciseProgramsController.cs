using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Wellness_app_Backend.Models;

namespace Wellness_app_Backend.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ExerciseProgramsController : ControllerBase
    {
        private readonly WellnessAppContext _context;

        public ExerciseProgramsController(WellnessAppContext context)
        {
            _context = context;
        }

        // GET: api/ExercisePrograms
        [HttpGet]
        public async Task<ActionResult<IEnumerable<ExerciseProgram>>> GetExercisePrograms()
        {
            return await _context.ExercisePrograms.ToListAsync();
        }

        // GET: api/ExercisePrograms/5
        [HttpGet("{id}")]
        public async Task<ActionResult<ExerciseProgram>> GetExerciseProgram(long id)
        {
            var exerciseProgram = await _context.ExercisePrograms.FindAsync(id);

            if (exerciseProgram == null)
            {
                return NotFound();
            }

            return exerciseProgram;
        }

        // PUT: api/ExercisePrograms/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutExerciseProgram(long id, ExerciseProgram exerciseProgram)
        {
            if (id != exerciseProgram.Id)
            {
                return BadRequest();
            }

            _context.Entry(exerciseProgram).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!ExerciseProgramExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // POST: api/ExercisePrograms
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<ExerciseProgram>> PostExerciseProgram(ExerciseProgram exerciseProgram)
        {
            _context.ExercisePrograms.Add(exerciseProgram);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetExerciseProgram", new { id = exerciseProgram.Id }, exerciseProgram);
        }

        // DELETE: api/ExercisePrograms/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteExerciseProgram(long id)
        {
            var exerciseProgram = await _context.ExercisePrograms.FindAsync(id);
            if (exerciseProgram == null)
            {
                return NotFound();
            }

            _context.ExercisePrograms.Remove(exerciseProgram);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool ExerciseProgramExists(long id)
        {
            return _context.ExercisePrograms.Any(e => e.Id == id);
        }
    }
}
