using System.Collections.Generic;

namespace Domain
{
    public class Route
    {
        public int Id { get; set; }
        public Node StartNode { get; set; }
        public Node EndNode { get; set; }
        public Transport Transport { get; set; }
        public int Duration { get; set; }
        public int VanguardTime { get; set; }
        public int Cost { get; set; }
        public List<DepartureDayTime> DepartureDayTime { get; set; } = new List<DepartureDayTime>();
    }
}