using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using USI_Project.Models;

namespace USI_Project.Controllers
{
    public class HomeController : Controller
    {
        public ActionResult Index()
        {
            LoginModel obj = new LoginModel();
            return View(obj);
        }
        [HttpPost]
        public ActionResult Index(LoginModel objuserlogin)
        {
            var display = Userloginvalues().Where(m => m.UserName == objuserlogin.UserName && m.Password == objuserlogin.Password).FirstOrDefault();
            if (display != null)
            {
                ViewBag.Status = "CORRECT UserName and Password";
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
            objModel.Add(new LoginModel { UserName = "user1", Password = "password1" });
            objModel.Add(new LoginModel { UserName = "user2", Password = "password2" });
            objModel.Add(new LoginModel { UserName = "user3", Password = "password3" });
            objModel.Add(new LoginModel { UserName = "user4", Password = "password4" });
            objModel.Add(new LoginModel { UserName = "user5", Password = "password5" });
            return objModel;
        }
    }
}