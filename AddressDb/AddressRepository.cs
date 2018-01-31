using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using AddressDb.Dto;
using AddressDb.Models;
using Microsoft.EntityFrameworkCore;

namespace AddressDb
{
    public class AddressRepository
    {
        public async Task<List<CountryDto>> GetCountries()
        {
            using (var dbContext = new AddressDbContext())
            {
                var items = await dbContext.Country
                    .Select(e => new CountryDto
                    {
                        Id = e.Id,
                        Name = e.Name,
                        SortName = e.SortName
                    }).ToListAsync();

                return items;
            }
        }

        public async Task<List<IdName>> GetStates(int countryId)
        {
            using (var dbContext = new AddressDbContext())
            {
                var items = await dbContext.State
                    .Where(e => e.CountryId == countryId)
                    .Select(e => new IdName
                    {
                        Id = e.Id,
                        Name = e.Name
                    }).ToListAsync();

                return items;
            }
        }

        public async Task<List<IdName>> GetCites(int stateId)
        {
            using (var dbContext = new AddressDbContext())
            {
                var items = await dbContext.City
                    .Where(e => e.StateId == stateId)
                    .Select(e => new IdName
                    {
                        Id = e.Id,
                        Name = e.Name,
                    }).ToListAsync();

                return items;
            }
        }
    }
}
