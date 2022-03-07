using ExcelDataReader;
using System;
using System.Collections.Generic;
using System.IO;
using System.Web.Mvc;
using USI_Project.Models;


namespace USI_Project.Controllers
{
    public class GetInventoryController : Controller
    {
        // GET: GetInventory
        [HttpGet]
        public ActionResult Index()
        {
            return View(new List<InventoryModel>());
        }
        [HttpPost]
        public ActionResult Index(FormCollection form)
        {
            List<InventoryModel> Inventory = new List<InventoryModel>();
            var fileName = "./Inventory.xlsx";
            // For .net core, the next line requires the NuGet package, 
            // System.Text.Encoding.CodePages
            System.Text.Encoding.RegisterProvider(System.Text.CodePagesEncodingProvider.Instance);
            using (var stream = System.IO.File.Open(fileName, FileMode.Open, FileAccess.Read))
            {
                using (var reader = ExcelReaderFactory.CreateReader(stream))
                {

                    while (reader.Read()) //Each row of the file
                    {
                        Inventory.Add(new InventoryModel
                        {
                            Property = reader.GetValue(0).ToString(),
                            Value = reader.GetValue(1).ToString(),                            
                        });
                    }
                }
            }
            return View(Inventory);
        }
    }
}