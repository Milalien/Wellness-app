using System.ComponentModel.DataAnnotations;

namespace Wellness_app_Backend.Models
{
    public class Todoitem
    {
        public long Id { get; set; }
        [Required]
        [MinLength(3)]
        [MaxLength(255)]
        public string Name { get; set; }
        public bool IsComplete { get; set; }

    }
}
