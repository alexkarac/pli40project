using System.Collections.Generic;

namespace Domain
{
    public class DepartureDayTime
    {
        public int Id { get; set; }
        public int Day { get; set; }
        public List<DepartureTime> DepartureTimes { get; set; } = new List<DepartureTime>();
    }
}