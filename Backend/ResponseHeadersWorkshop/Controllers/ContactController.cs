using Microsoft.AspNetCore.Mvc;
using ResponseHeadersWorkshop.Models;

namespace ResponseHeadersWorkshop.Controllers
{

    [ApiController]
    [Route("api/[controller]")]
    public class ContactController : ControllerBase
    {
        [HttpPost]
        public IActionResult Submit(Contact contact)
        {
            return Ok(new { status = "Message received", data = contact });
        }
    }
}
