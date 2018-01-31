using System;
using System.Collections.Generic;

namespace AddressDb.Models
{
    public partial class Country
    {
        public Country()
        {
            State = new HashSet<State>();
        }

        public int Id { get; set; }
        public string SortName { get; set; }
        public string Name { get; set; }
        public int? PhoneCode { get; set; }

        public ICollection<State> State { get; set; }
    }
}
