using API.Dtos;
using API.Helpers;

namespace API.Interfaces
{
    public interface IBlogRepository
    {
        Task<PagedList<BlogDto>> GetBlogsAsync(UserParams userParams);
    }
}