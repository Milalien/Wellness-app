using Microsoft.EntityFrameworkCore;

namespace Wellness_app_Backend.Models
{
    public class WellnessAppContext : DbContext
    {
        public WellnessAppContext(DbContextOptions<WellnessAppContext> options) : base(options)
        {

        }
        public DbSet<Todoitem> Todoitems { get; set; } = null!;

        public DbSet<User> Users { get; set; } = null!; 

        public DbSet<FoodDiaryEntry> FoodDiaryEntries { get; set; } = null!;
        public DbSet<ExerciseProgram> ExercisePrograms { get; set; } = null!;
        public DbSet<Exercise> Exercises { get; set; } = null!;


    }
}
