using System.ComponentModel.DataAnnotations;

namespace Wellness_app_Backend.Models
{
    public class User
    {
        public long Id { get; set; }
        [Required]
        [MinLength(3)]
        [MaxLength(255)]
        public string UserName { get; set; }
        [Required]
        [MinLength(8)]
        [MaxLength(255)]
        public string Password { get; set; }
        [Required]
        [MaxLength(50)]
        public string? FirstName { get; set; }

        [Required]
        [MaxLength(50)]
        public string? LastName { get; set; }
    }
}
