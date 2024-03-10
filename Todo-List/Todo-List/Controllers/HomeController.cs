using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System.Diagnostics;
using Todo_List.Models;
using Todo_List.Data; // Add this line
using System.Linq; // Add this line

namespace Todo_List.Controllers
{
    public class HomeController : Controller
    {
        private readonly ILogger<HomeController> _logger;
        private readonly TaskContext _context; // Add this line

        public HomeController(ILogger<HomeController> logger, TaskContext context) // Modify this line
        {
            _logger = logger;
            _context = context; // Add this line
        }

        public IActionResult Index()
        {
            var tasks = _context.Tasks.ToList(); // Retrieve tasks from the database
            return View(tasks); // Pass tasks to the view
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }
    }
}