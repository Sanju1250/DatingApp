using System.Threading.Tasks;
using DatingApp.API.Data;
using DatingApp.API.Dtos;
using DatingApp.API.Models;
using Microsoft.AspNetCore.Mvc;

namespace DatingApp.API.Controllers
{
    [Route("api/[Controller]")]
    [ApiController]
    public class AuthController : ControllerBase
    {
        private readonly IAuthRepository _repo;

        public AuthController(IAuthRepository repo)
        {
            _repo = repo;

        }
        [HttpPost("register")]
        public async Task<IActionResult> Register(UserForRegisterDto userForRegister ){

            //validate request

            userForRegister.Username=userForRegister.Username.ToLower();
            if(await _repo.UserExist(userForRegister.Username))
            return BadRequest("Username aleady exist");

            var userToCreate=new User
            {
                Username=userForRegister.Username
            };
            var createdUser=await _repo.Register(userToCreate,userForRegister.Password);
            return StatusCode(201);
        }
    }
}