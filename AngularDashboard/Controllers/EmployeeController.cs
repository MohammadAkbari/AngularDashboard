using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.ApplicationInsights.AspNetCore.Extensions;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Northwind;
using Northwind.Models;

namespace AngularDashboard.Controllers
{
    [Route("api/[controller]")]
    [Authorize]
    public class EmployeeController : Controller
    {
        private readonly EmployeeRepository _employeeRepository;

        public EmployeeController()
        {
            _employeeRepository = new EmployeeRepository();
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<Employee>> List()
        {
            var list = await _employeeRepository.GetList(36);

            return list;
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody]Employee employee)
        {
            _employeeRepository.Create(employee);

            return Ok();
        }

        [HttpPost("[action]")]
        public async Task<IActionResult> Upload([FromForm]UploadVm vm)
        {
            var files = Request.Form.Files;

            var file = files.FirstOrDefault();

            if (file != null)
            {
                var parts = file.FileName.Split(".");
                var fileName = $"{Guid.NewGuid()}.{parts[1]}";
                var relativePath = $"employees/{fileName}";

                var filePath = Path.Combine(Directory.GetCurrentDirectory(), "wwwroot", relativePath);

                using (var stream = new FileStream(filePath, FileMode.Create))
                {
                    await file.CopyToAsync(stream);
                }
                return Ok(new {Path = $"{Request.GetUri().GetLeftPart(UriPartial.Authority)}/{relativePath}"});
            }

            return BadRequest();
        }
    }

    public class UploadVm
    {
        public List<IFormFile> Files { get; set; }
    }
}