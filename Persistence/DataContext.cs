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

        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            builder.Entity<User>()
                .HasData(
                    new User { Id = 1, Username = "username1", Password = "123456", Name = "user1", Surname = "surname1", Mail = "mail1@ac.gr" },
                    new User { Id = 2, Username = "username2", Password = "123456", Name = "user2", Surname = "surname2", Mail = "mail2@ac.gr" },
                    new User { Id = 3, Username = "username3", Password = "123456", Name = "user3", Surname = "surname3", Mail = "mail3@ac.gr" },
                    new User { Id = 4, Username = "username4", Password = "123456", Name = "user4", Surname = "surname4", Mail = "mail4@ac.gr" }
                );
        }
    }
}
