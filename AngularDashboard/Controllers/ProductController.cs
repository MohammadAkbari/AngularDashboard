using System.Collections.Generic;
using System.Threading.Tasks;
using AdventureWorks.Repositores;
using Microsoft.AspNetCore.Mvc;

namespace AngularDashboard.Controllers
{
    [Route("api/[controller]")]
    public class ProductController : Controller
    {
        [HttpGet("[action]")]
        public async Task<IEnumerable<ProductDto>> List(string colors)
        {
            var repository = new ProductRepository();

            if (string.IsNullOrEmpty(colors))
            {
                var items = await repository.GetList(36);
                return items;
            }
            else
            {
                var colorList = colors.Split(',');
                var items = await repository.GetList(colorList, 36);
                return items;
            }
        }

        [HttpGet("[action]")]
        public async Task<IEnumerable<string>> Colors()
        {
            var repository = new ProductRepository();

            var items = await repository.GetColors();

            return items;
        }
    }
}
