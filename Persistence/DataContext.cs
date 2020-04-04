using System;
using Microsoft.EntityFrameworkCore;
using Domain;

namespace Persistence
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions options) : base(options)
        {
        }
        
        public DbSet<Node> Nodes { get; set; }
        public DbSet<Transport> Transports { get; set; }
        public DbSet<DepartureTime> DepartureTimes { get; set; }
        
        public DbSet<DepartureDayTime> DepartureDayTimes { get; set; }
        public DbSet<Route> Routes { get; set; }

        

    }
}
