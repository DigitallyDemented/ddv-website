module.exports = function(eleventyConfig) {

  // Pass through all existing static site files unchanged
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("sitemap.xml");
  eleventyConfig.addPassthroughCopy("CNAME.bak");

  // Pass through existing HTML pages (not processed by Eleventy)
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("about.html");
  eleventyConfig.addPassthroughCopy("consulting.html");
  eleventyConfig.addPassthroughCopy("contact.html");
  eleventyConfig.addPassthroughCopy("courses.html");
  eleventyConfig.addPassthroughCopy("privacy.html");
  eleventyConfig.addPassthroughCopy("tools.html");
  eleventyConfig.addPassthroughCopy("card.html");

  // Blog collection: all posts tagged "post"
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("post").sort((a, b) => b.date - a.date);
  });

  // Date formatting filter
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    return new Date(dateObj).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  });

  // Excerpt filter — first 160 chars of content
  eleventyConfig.addFilter("excerpt", (content) => {
    if (!content) return "";
    const text = content.replace(/<[^>]+>/g, "").trim();
    return text.length > 160 ? text.substring(0, 157) + "..." : text;
  });

  return {
    // Only process md and njk — leave html files alone
    templateFormats: ["md", "njk"],
    markdownTemplateEngine: "njk",
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};
