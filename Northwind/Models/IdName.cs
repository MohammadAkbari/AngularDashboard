using System.Runtime.Serialization;
using MongoDB.Bson.Serialization.Attributes;

namespace Northwind.Models
{
    //[BsonIgnoreExtraElements]
    public class IdName
    {
        [BsonId]
        [DataMember]
        public int _id { get; set; }

        public int Id { get; set; }

        public string DisplayName { get; set; }
    }
}