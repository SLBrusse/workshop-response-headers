using Microsoft.AspNetCore.Mvc;

namespace ResponseHeadersWorkshop.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PostsController : ControllerBase
    {
        [HttpGet]
        public IActionResult Get()
        {
            var posts = new[] {
            new { Id = 1, Title = "Response headers" },
            new { Id = 2, Title = "Workshop" }
        };
            return Ok(posts);
        }
    }
}
