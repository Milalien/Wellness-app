﻿using System;
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
    public class TodoitemsController : ControllerBase
    {
        private readonly WellnessAppContext _context;

        public TodoitemsController(WellnessAppContext context)
        {
            _context = context;
        }

        // GET: api/Todoitems
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Todoitem>>> GetTodoitems()
        {
            return await _context.Todoitems.ToListAsync();
        }

        // GET: api/Todoitems/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Todoitem>> GetTodoitem(long id)
        {
            var todoitem = await _context.Todoitems.FindAsync(id);

            if (todoitem == null)
            {
                return NotFound();
            }

            return todoitem;
        }

        // PUT: api/Todoitems/5
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPut("{id}")]
        public async Task<IActionResult> PutTodoitem(long id, Todoitem todoitem)
        {
            if (id != todoitem.Id)
            {
                return BadRequest();
            }

            _context.Entry(todoitem).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!TodoitemExists(id))
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

        // POST: api/Todoitems
        // To protect from overposting attacks, see https://go.microsoft.com/fwlink/?linkid=2123754
        [HttpPost]
        public async Task<ActionResult<Todoitem>> PostTodoitem(Todoitem todoitem)
        {
            _context.Todoitems.Add(todoitem);
            await _context.SaveChangesAsync();

            //return CreatedAtAction("GetTodoitem", new { id = todoitem.Id }, todoitem);
            return CreatedAtAction(nameof(GetTodoitem), new { id = todoitem.Id }, todoitem);
        }

        // DELETE: api/Todoitems/5
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteTodoitem(long id)
        {
            var todoitem = await _context.Todoitems.FindAsync(id);
            if (todoitem == null)
            {
                return NotFound();
            }

            _context.Todoitems.Remove(todoitem);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool TodoitemExists(long id)
        {
            return _context.Todoitems.Any(e => e.Id == id);
        }
    }
}
