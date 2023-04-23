using API.Dtos;
using API.Helpers;
using API.Interfaces;
using AutoMapper;
using AutoMapper.QueryableExtensions;
using Microsoft.EntityFrameworkCore;

namespace API.Data
{
    public class BlogRepository
    {
        private readonly DataContext _context;
        private readonly IMapper _mapper;
        public BlogRepository(DataContext context, IMapper mapper)
        {
            _mapper = mapper;
            _context = context;
        }
    }
}