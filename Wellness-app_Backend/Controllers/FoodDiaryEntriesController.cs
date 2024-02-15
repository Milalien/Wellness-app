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
    public class FoodDiaryEntriesController : ControllerBase
    {
        private readonly WellnessAppContext _context;

        public FoodDiaryEntriesController(WellnessAppContext context)
        {
            _context = context;
        }

        // GET: api/FoodDiaryEntries
        [HttpGet]
        public async Task<ActionResult<IEnumerable<FoodDiaryEntry>>> GetFoodDiaryEntries()
        {
            return await _context.FoodDiaryEntries.ToListAsync();
        }

        // GET: api/FoodDiaryEntries/5
        [HttpGet("{id}")]
        public async Task<ActionResult<FoodDiaryEntry>> GetFoodDiaryEntry(long id)
        {
            var foodDiaryEntry = await _context.FoodDiaryEntries.FindAsync(id);

            if (foodDiaryEntry == null)
            {
                return NotFound();
            }

            return foodDiaryEntry;
        }

        // PUT: api/FoodDiaryEntries/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutFoodDiaryEntry(long id, FoodDiaryEntry foodDiaryEntry)
        {
            if (id != foodDiaryEntry.Id)
            {
                return BadRequest();
            }

            _context.Entry(foodDiaryEntry).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!FoodDiaryEntryExists(id))
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

        // POST: api/FoodDiaryEntries
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<FoodDiaryEntry>> PostFoodDiaryEntry(FoodDiaryEntry foodDiaryEntry)
        {
            _context.FoodDiaryEntries.Add(foodDiaryEntry);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetFoodDiaryEntry", new { id = foodDiaryEntry.Id }, foodDiaryEntry);
        }

        // DELETE: api/FoodDiaryEntries/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteFoodDiaryEntry(long id)
        {
            var foodDiaryEntry = await _context.FoodDiaryEntries.FindAsync(id);
            if (foodDiaryEntry == null)
            {
                return NotFound();
            }

            _context.FoodDiaryEntries.Remove(foodDiaryEntry);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool FoodDiaryEntryExists(long id)
        {
            return _context.FoodDiaryEntries.Any(e => e.Id == id);
        }
    }
}
