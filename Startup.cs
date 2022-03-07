using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace USI_Project
{
   app.UseMvc(routes =>
  {
      routes.MapRoute(
          name: "default",
          template: "{controller=Inventory}/{action=Index}/{id?}");
  }
}