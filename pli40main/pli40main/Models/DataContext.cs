using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace pli40main.Models
{
    public class DataContext : DbContext
    {

        private const string connectionString = "Server=(localdb)\\mssqllocaldb;Database=pli40db;Trusted_Connection=True;";

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(connectionString);
        }

        public DbSet<Node> Nodes { get; set; }
        public DbSet<Transport> Transports { get; set; }
        public DbSet<DepartureTime> DepartureTimes { get; set; }

        public DbSet<DepartureDayTime> DepartureDayTimes { get; set; }
        public DbSet<Route> Routes { get; set; }

    }
}
