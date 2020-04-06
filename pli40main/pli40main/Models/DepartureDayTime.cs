using System;
using System.Collections.Generic;
using System.Text;

namespace pli40main.Models
{
    public class DepartureDayTime
    {
        public int Id { get; set; }
        public int Day { get; set; }
        public List<DepartureTime> DepartureTimes { get; set; } = new List<DepartureTime>();
    }
}
