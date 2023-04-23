namespace API.Dtos
{
    public class BlogDto
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Author { get; set; }
        public string Content { get; set; }
        public string Url { get; set; }
        public string Catergory { get; set; }
        public string PublicId { get; set; }
    }
}