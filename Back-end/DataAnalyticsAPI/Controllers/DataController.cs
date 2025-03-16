using Microsoft.AspNetCore.Mvc;

namespace DataAnalyticsAPI.Controllers
{
    using DataAnalyticsAPI.Data;
    using DataAnalyticsAPI.Models;
    using Microsoft.AspNetCore.Mvc;
    using Microsoft.EntityFrameworkCore;

    [Route("api/[controller]")]
    [ApiController]
    public class DataController : ControllerBase
    {
        private readonly ApplicationDbContext _context;

        public DataController(ApplicationDbContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<IActionResult> GetData() => Ok(await _context.DataRecords.ToListAsync());
    }

}
