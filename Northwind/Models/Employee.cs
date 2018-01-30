using System;
using System.Collections.Generic;
using MongoDB.Bson.Serialization.Attributes;

namespace Northwind.Models
{
    [BsonIgnoreExtraElements]
    public class Employee
    {
        [BsonId]
        public int EmployeeId { get; set; }
        public string LastName { get; set; }
        public string FirstName { get; set; }
        public string Title { get; set; }
        public string TitleOfCourtesy { get; set; }
        public DateTime? BirthDate { get; set; }
        public DateTime? HireDate { get; set; }
        public string Address { get; set; }
        public string City { get; set; }
        public string Region { get; set; }
        public string PostalCode { get; set; }
        public string Country { get; set; }
        public string HomePhone { get; set; }
        public string Extension { get; set; }
        public byte[] Photo { get; set; }
        public string PhotoBase64 { get; set; }
        public string Notes { get; set; }
        public string PhotoPath { get; set; }
        public IdName ReportsTo { get; set; }
        public ICollection<IdName> Territories { get; set; }
    }
}
