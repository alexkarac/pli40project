class Route {
    constructor (id, startPoint, endPoint, transport, duration, cost, stops) {
        this.id = id;
        this.startPoint = startPoint;
        this.endPoint = endPoint;
        this.transport = transport;
        this.duration = duration;
        this.cost = cost;
        this.stops = stops;
    }
};

export default Route;