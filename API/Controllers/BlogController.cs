using System.Runtime.CompilerServices;
using API.Dtos;
using API.Extensions;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers
{
    public class BlogController : BaseApiController
    {
        private readonly IUnitOfWork _unitOfWork;
        private readonly IMapper _mapper;
        public BlogController(IUnitOfWork unitOfWork, IMapper mapper)
        {
            _mapper = mapper;
            _unitOfWork = unitOfWork;
        }

        // [HttpGet]
        // public async Task<ActionResult<PagedList<BlogDto>>> GetBlogsAsync([FromQuery] UserParams userParams)
        // {
        //     var blogs = await _unitOfWork.blogRepository.GetBlogsAsync(userParams);
        //     Response.AddPaginationHeader(new PaginationHeader(blogs.CurrentPage, blogs.PageSize, blogs.TotalCount, blogs.TotalPages));

        //     return Ok(blogs);
        // }
    }
}