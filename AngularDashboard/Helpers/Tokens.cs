using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using Newtonsoft.Json;
using  AngularDashboard.Auth;

namespace AngularDashboard.Helpers
{
    public class Tokens
    {
        public static async Task<string> GenerateJwt(ClaimsIdentity identity,
            IJwtFactory jwtFactory,
            string userName,
            JwtIssuerOptions jwtOptions,
            JsonSerializerSettings serializerSettings)
        {
            var response = new
            {
                id = identity.Claims.Single(c => c.Type == "id").Value,
                token = await jwtFactory.GenerateEncodedToken(userName, identity),
                expires = (int)jwtOptions.ValidFor.TotalSeconds
            };

            return JsonConvert.SerializeObject(response, serializerSettings);
        }
    }
}
