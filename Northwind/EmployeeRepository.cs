using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Northwind.Models;
using MongoDB.Driver;

namespace Northwind
{
    public class EmployeeRepository
    {
        private readonly MongoContext _dbContext = null;

        public EmployeeRepository()
        {
            _dbContext = new MongoContext();
        }

        public void Add(Employee item)
        {
            _dbContext.Employees.InsertOne(item);
        }

        public async Task<List<Employee>> GetList(int count)
        {
            var list = await _dbContext.Employees
                .Find(e => e.EmployeeId != null)
                .Limit(count)
                .ToListAsync();

            list.ForEach(e =>
            {
                e.PhotoBase64 = e.Photo == null? null : "data:image/png;base64," + Convert.ToBase64String(e.Photo);
            });

            return list;
        }

        public void Create(Employee employee)
        {
            _dbContext.Employees.InsertOne(employee);
        }
    }
}
