using System.Collections.Generic;
using System.Threading.Tasks;
using Application.Routes;
using Domain;
using MediatR;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RoutesController : ControllerBase
    {
        private readonly IMediator _mediator;
        public RoutesController(IMediator mediator)
        {
            _mediator = mediator;
        }

        [HttpGet]
        public async Task<ActionResult<List<Route>>> List()
        {
            return await _mediator.Send(new List.Query());
        }

        [HttpGet("{startNode}")]
        public async Task<ActionResult<Route>> Details(int startNode)
        {
            return await _mediator.Send(new Details.Query{startNodeId = startNode});
        }
    }
}