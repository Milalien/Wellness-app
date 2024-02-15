using System.ComponentModel.DataAnnotations;

namespace Wellness_app_Backend.Models
{
    public class ExerciseProgram
    {
        public long Id { get; set; }
        [Required]
        [MinLength(3)]
        [MaxLength(255)]
        public string Name { get; set; }
        public Exercise[]? Exercises { get; set; }
    }
    public class Exercise
    {
        public long Id { get; set; }

        [Required]
        [MinLength(3)]
        [MaxLength(255)]
        public string Name { get; set; }
        [Required]
        public string Type { get; set; }
        [Required]
        public int Sets { get; set; }
        public int Reps { get; set; }
        public int Weight { get; set; }
        public int Time { get; set; }


    }
}
