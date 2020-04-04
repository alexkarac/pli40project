using System.Threading;
using System.Threading.Tasks;
using Domain;
using MediatR;
using Persistence;

namespace Application.Routes
{
    public class Details
    {
        public class Query : IRequest<Route>
        {
            public int startNodeId { get; set; }
        }

        public class Handler : IRequestHandler<Query, Route>
        {
            private readonly DataContext _context;
            public Handler(DataContext context)
            {
                _context = context;
            }
            public async Task<Route> Handle(Query request, CancellationToken cancellationToken)
            {
                var route = await _context.Routes.FindAsync(request.startNodeId);
                return route;
            }
        }
    }
}