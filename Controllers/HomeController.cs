using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using USI_Project.Entity;
using USI_Project.Models;

namespace USI_Project.Controllers
{
    public class HomeController : Controller
    {
        private readonly EmployeeDBEntities1 db = new EmployeeDBEntities1();
         public ActionResult Start()
        {
            return View();
        }

        [HttpGet]
        public ActionResult Login()
        {
            LoginModel obj = new LoginModel();
            return View();
        }
        [HttpPost]
        public ActionResult Login(LoginModel objuserlogin)
        {
            //var display = Userloginvalues().Where(m => m.UserName == objuserlogin.UserName && m.Password == objuserlogin.Password).FirstOrDefault();
            var display =db.Userloginvalues.Where(m => m.Username == objuserlogin.UserName && m.Password == objuserlogin.Password).FirstOrDefault();
            if (display != null)
            {
                return RedirectToAction("Login", "Home");
            }
            else
            {
                ViewBag.Status = "INCORRECT UserName or Password";
            }
            return View(objuserlogin);
        }
        public List<LoginModel> Userloginvalues()
        {
            List<LoginModel> objModel = new List<LoginModel>();
            objModel.Add(new LoginModel { UserName = "ganesh", Password = "123456" });
            objModel.Add(new LoginModel { UserName = "jyostna", Password = "123456" });
            objModel.Add(new LoginModel { UserName = "venkatesh", Password = "123456" });
            objModel.Add(new LoginModel { UserName = "pranay", Password = "123456" });
            objModel.Add(new LoginModel { UserName = "jeevan", Password = "123456" });
            objModel.Add(new LoginModel { UserName = "sarath", Password = "123456" });
            return objModel;
        }
    }
}
