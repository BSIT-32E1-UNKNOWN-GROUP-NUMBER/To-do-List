using Microsoft.EntityFrameworkCore;
using TodoListApp.Models;

public class TaskContext : DbContext
{
    public DbSet<TaskModel> Tasks { get; set; }

    public TaskContext(DbContextOptions<TaskContext> options)
        : base(options)
    {
    }

    protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
    {
        if (!optionsBuilder.IsConfigured)
        {
            optionsBuilder.UseSqlServer("Server=(localdb)\\mssqllocaldb;Database=TaskDb;Trusted_Connection=True;MultipleActiveResultSets=true");
        }
    }
}