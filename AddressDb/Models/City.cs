using System;
using System.Collections.Generic;

namespace AddressDb.Models
{
    public partial class City
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public int StateId { get; set; }

        public State State { get; set; }
    }
}
