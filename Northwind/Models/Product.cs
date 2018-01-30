using MongoDB.Bson.Serialization.Attributes;

namespace Northwind.Models
{
    [BsonIgnoreExtraElements]
    public class Product
    {
        [BsonId]
        public int ProductId { get; set; }
        public string ProductName { get; set; }
        public int? SupplierId { get; set; }
        public int? CategoryId { get; set; }
        public string QuantityPerUnit { get; set; }
        public decimal? UnitPrice { get; set; }
        public short? UnitsInStock { get; set; }
        public short? UnitsOnOrder { get; set; }
        public short? ReorderLevel { get; set; }
        public bool Discontinued { get; set; }

        public IdName Category { get; set; }

        public IdName Supplier { get; set; }
    }
}