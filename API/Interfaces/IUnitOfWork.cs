namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository userRepository { get; }
        // IBlogRepository blogRepository { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}