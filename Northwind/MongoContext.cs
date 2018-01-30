using MongoDB.Driver;
using Northwind.Models;

namespace Northwind
{
    public class MongoContext
    {
        private readonly IMongoDatabase _database;

        public MongoContext()
        {
            var client = new MongoClient("mongodb://localhost:27017");

            _database = client.GetDatabase("Northwind");
        }

        public IMongoCollection<Employee> Employees => _database.GetCollection<Employee>(nameof(Employees));
    }
}