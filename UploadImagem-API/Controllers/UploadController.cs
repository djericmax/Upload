using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UploadImagem_API.Controllers
{
    [Route("api/[controller")]
    [ApiController]
    public class UploadController : Controller
    {
        [HttpPost, DisableRequestSizeLimit]
        public IActionResult Index()
        {
            try
            {

            }
            catch (global::System.Exception)
            {

                throw;
            }
        }
    }
}
