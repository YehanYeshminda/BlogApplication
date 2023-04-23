namespace API.Interfaces
{
    public interface IUnitOfWork
    {
        IUserRepository userRepository { get; }
        Task<bool> Complete();
        bool HasChanges();
    }
}