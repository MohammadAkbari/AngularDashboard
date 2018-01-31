using System.Collections.Generic;
using System.Threading.Tasks;
using AddressDb;
using AddressDb.Dto;
using Microsoft.AspNetCore.Mvc;
using IdName = AddressDb.Dto.IdName;

namespace AngularDashboard.Controllers
{
    [Route("api/[controller]")]
    public class AddressController : Controller
    {
        private readonly AddressRepository _addressRepository;

        public AddressController()
        {
            _addressRepository = new AddressRepository();
        }

        [HttpGet("[action]")]
        public async Task<List<CountryDto>> Countries()
        {
            var list = await _addressRepository.GetCountries();

            return list;
        }

        [HttpGet("[action]/{id}")]
        public async Task<List<IdName>> States(int id)
        {
            var list = await _addressRepository.GetStates(id);

            return list;
        }

        [HttpGet("[action]/{id}")]
        public async Task<List<IdName>> Cities(int id)
        {
            var list = await _addressRepository.GetCites(id);

            return list;
        }
    }
}