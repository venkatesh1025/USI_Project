using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace USI_Project.Models
{
    public class LoginModel
    {
        [Required(ErrorMessage="enter valid UserName:")]
        [Display(Name ="UserName:")]
        public string UserName { get; set; }
        
        [Required(ErrorMessage ="enter password:")]
        [Display(Name ="Password:")]
        [DataType(DataType.Password)]
        public string Password { get; set; }
    }
}
