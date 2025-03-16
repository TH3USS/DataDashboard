namespace DataAnalyticsAPI.Data
{
    using Microsoft.EntityFrameworkCore;
    using DataAnalyticsAPI.Models;

    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options) : base(options) { }
        public DbSet<DataRecord> DataRecords { get; set; }
    }

}
