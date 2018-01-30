using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using Northwind;
using Northwind.Models;

namespace AngularDashboard.Controllers
{
    [Route("api/[controller]")]
    public class EmployeeController : Controller
    {
        [HttpGet("[action]")]
        public async Task<IEnumerable<Employee>> List()
        {
            var repository = new EmployeeRepository();

            var list = await repository.GetList(36);

            return list;
        }

        [HttpPost("[action]")]
        public IActionResult Create([FromBody]Employee employee)
        {
            return Ok();
        }
    }
}