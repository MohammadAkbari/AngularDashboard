using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AdventureWorks.Data;
using Microsoft.EntityFrameworkCore;

namespace AdventureWorks.Repositores
{
    public class ProductRepository
    {
        public async Task<List<ProductDto>> GetList(int count)
        {
            using (var dbContext = new AdventureWorks2014Context())
            {
                var items = await dbContext.Product
                    .Include(e => e.ProductProductPhoto)
                    .ThenInclude(e => e.ProductPhoto)
                    .Include(e=>e.ProductSubcategory)
                    .Take(count)
                    .ToListAsync();

                await dbContext.SaveChangesAsync();

                var output = items.Select(e => new ProductDto
                {
                    Id = e.ProductId,
                    Name = e.Name,
                    Category = e.ProductSubcategory?.Name,
                    Color = e.Color,
                    Weight = e.Weight,
                    ThumbNail = e.ProductProductPhoto == null
                        ? null
                        : "data:image/png;base64," +
                          Convert.ToBase64String(e.ProductProductPhoto.First().ProductPhoto.ThumbNailPhoto)
                }).ToList();

                return output;
            }
        }

        public async Task<List<ProductDto>> GetList(string[] colorList, int count)
        {
            using (var dbContext = new AdventureWorks2014Context())
            {
                var items = await dbContext.Product
                    .Where(e => colorList.Contains(e.Color))
                    .Include(e => e.ProductProductPhoto)
                    .ThenInclude(e => e.ProductPhoto)
                    .Include(e => e.ProductSubcategory)
                    .Take(count)
                    .ToListAsync();

                await dbContext.SaveChangesAsync();

                var output = items.Select(e => new ProductDto
                {
                    Id = e.ProductId,
                    Name = e.Name,
                    Category = e.ProductSubcategory?.Name,
                    Color = e.Color,
                    Weight = e.Weight,
                    ThumbNail = e.ProductProductPhoto == null
                        ? null
                        : "data:image/png;base64," +
                          Convert.ToBase64String(e.ProductProductPhoto.First().ProductPhoto.ThumbNailPhoto)
                }).ToList();

                return output;
            }
        }

        public async Task<List<string>> GetColors()
        {
            using (var dbContext = new AdventureWorks2014Context())
            {
                var items = await dbContext.Product
                    .Select(e=>e.Color)
                    .Distinct()
                    .ToListAsync();

                return items;
            }
        }
    }
}
