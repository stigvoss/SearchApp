using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SearchApp.Controllers
{
    [Route("api/[controller]")]
    public class SearchController : Controller
    {
        List<QueryResult> items = new List<QueryResult>
            {
                new QueryResult
                {
                    Title = "Bilbasen",
                    Digest = "Find your new used car right here!",
                    Url = "http://bilbasen.dk/"
                },
                new QueryResult
                {
                    Title = "Facebook",
                    Digest = "No friends? Meet some internet strangers...",
                    Url = "http://facebok.com/"
                },
                new QueryResult
                {
                    Title = "Hello Internet FM",
                    Digest = "Two dudes talking",
                    Url = "http://hellointernet.fm/"
                },
                new QueryResult
                {
                    Title = "YouTube",
                    Digest = "An eternal time sink",
                    Url = "http://youtube.com/"
                }
            };

        [HttpGet]
        public IEnumerable<QueryResult> Query(string query)
        {
            string needle = query.ToLower();

            return items.Where(item =>
                item.Title.ToLower().Contains(needle) ||
                item.Digest.ToLower().Contains(needle)
            );
        }

        public class QueryResult
        {
            public string Title { get; set; }
            public string Digest { get; set; }
            public string Url { get; set; }
        }
    }
}
