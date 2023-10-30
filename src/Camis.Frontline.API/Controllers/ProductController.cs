using Camis.Frontline.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace Camis.Frontline.API.Controllers
{
    [ApiController]
    [Route("products")]
    public class ProductController : ControllerBase
    {

        private readonly ILogger<ProductController> _logger;

        public ProductController(ILogger<ProductController> logger)
        {
            _logger = logger;
        }

        [HttpGet(Name = "products")]
        public IEnumerable<Product> Get()
        {
            return new List<Product>
{
    new Product { Id = "4eb57522-20c5-4f85-8abf-725ee10a79d1", Name = "Camping Tent 2-Person", Image = "tent1.jpg", Price = 79.99 },
    new Product { Id = "ed773ac5-1e36-4e9a-8c68-3e7b1c8d7d7e", Name = "Family Cabin Tent", Image = "tent2.jpg", Price = 149.99 },
    new Product { Id = "a7c9135d-4df4-4420-95f2-e3bcf07f7397", Name = "Ultralight Backpacking Tent", Image = "tent3.jpg", Price = 129.95 },
    new Product { Id = "0ab352b7-9e72-4780-a255-02d4b174a390", Name = "Pop-Up Beach Tent", Image = "tent4.jpg", Price = 49.99 },
    new Product { Id = "36b7d0e5-25de-4c50-9875-930d57653ed2", Name = "4-Season Mountaineering Tent", Image = "tent5.jpg", Price = 249.99 },
    new Product { Id = "c9b8f2c9-dfad-40c2-83e9-e52c2dd34b8d", Name = "Dome Tent with Screen Room", Image = "tent6.jpg", Price = 109.99 },
    new Product { Id = "2148c53b-826d-4ef7-b44c-d18f23639c86", Name = "Hiking Tent for 2 Persons", Image = "tent7.jpg", Price = 89.99 },
    new Product { Id = "b3150a6d-b6d4-4b25-af93-5b48e5ecabe3", Name = "Beach Shelter with UV Protection", Image = "tent8.jpg", Price = 69.95 },
    new Product { Id = "d9f6ed8f-5684-4eb7-826a-25b8a59bbf5d", Name = "Backpacking Hammock Tent", Image = "tent9.jpg", Price = 69.99 },
    new Product { Id = "1c75bc2f-e331-4d03-9a18-87cded48e650", Name = "Large Family Tent with Dividers", Image = "tent10.jpg", Price = 189.99 },
    new Product { Id = "3ef68c94-549c-4ed0-b2cf-1c3a85b57041", Name = "3-Season Backpacking Tent", Image = "tent11.jpg", Price = 119.99 },
    new Product { Id = "21fc7d38-40a0-43e6-aead-d5db3c24a4c9", Name = "Instant Cabin Tent", Image = "tent12.jpg", Price = 179.95 },
    new Product { Id = "d06fc430-97ab-49ab-ba2f-20d0de2c4e71", Name = "Compact Pop-Up Tent", Image = "tent13.jpg", Price = 59.99 },
    new Product { Id = "f1c6b799-b38d-4c2f-8aa7-5d0c1c4f0385", Name = "Tarp Shelter for Camping", Image = "tent14.jpg", Price = 39.99 },
    new Product { Id = "b8e8a9df-6b8c-4fb3-9d84-3e73cb2bf7f1", Name = "Tent Footprint Ground Cloth", Image = "tent15.jpg", Price = 19.99 },
    new Product { Id = "95ea0364-4b23-4db6-9ff3-d9299a032ed0", Name = "Camping Cot with Tent", Image = "tent16.jpg", Price = 149.95 },
    new Product { Id = "dab6f855-d7c6-4e8d-92d0-33e6e9a4bc73", Name = "4-Person Tunnel Tent", Image = "tent17.jpg", Price = 199.99 },
    new Product { Id = "d8c75348-d2f6-4534-ae2b-42a73dce0d2d", Name = "Ultralight Bivy Sack", Image = "tent18.jpg", Price = 59.95 },
    new Product { Id = "0f451bb0-6c99-4941-b8c4-5b6cbab03d96", Name = "Tent Repair Kit", Image = "tent19.jpg", Price = 14.99 },
    new Product { Id = "0e87f636-ecda-49c1-8db7-cfd4ddcd568d", Name = "Tent Stakes and Guylines Set", Image = "tent20.jpg", Price = 9.99 },
};
        }
    }
}