module.exports = function(eleventyConfig) {

  // Pass through all existing static site files unchanged
  eleventyConfig.addPassthroughCopy("css");
  eleventyConfig.addPassthroughCopy("js");
  eleventyConfig.addPassthroughCopy("images");
  eleventyConfig.addPassthroughCopy("files");
  eleventyConfig.addPassthroughCopy("robots.txt");
  eleventyConfig.addPassthroughCopy("CNAME");
  eleventyConfig.addPassthroughCopy("CNAME.bak");
  eleventyConfig.addPassthroughCopy(".nojekyll");

  // Pass through existing HTML pages (not processed by Eleventy)
  eleventyConfig.addPassthroughCopy("index.html");
  eleventyConfig.addPassthroughCopy("about.html");
  eleventyConfig.addPassthroughCopy("consulting.html");
  eleventyConfig.addPassthroughCopy("contact.html");
  eleventyConfig.addPassthroughCopy("courses.html");
  eleventyConfig.addPassthroughCopy("privacy.html");
  eleventyConfig.addPassthroughCopy("tools.html");
  eleventyConfig.addPassthroughCopy("card.html");
  eleventyConfig.addPassthroughCopy("cognitive-architecture.html");
  eleventyConfig.addPassthroughCopy("404.html");
  eleventyConfig.addPassthroughCopy("speaker-notes-crm.html");

  // Redirect: old blog slug → new blog slug
  eleventyConfig.addPassthroughCopy("blog/psychology-is-the-programming-language");

  // Exclude internal docs from the build
  eleventyConfig.ignores.add("skool-optimization-plan.md");

  // Blog collection: all posts tagged "post", excluding future-dated posts
  const now = new Date();
  eleventyConfig.addCollection("posts", function(collectionApi) {
    return collectionApi.getFilteredByTag("post")
      .filter(post => post.date <= now)
      .sort((a, b) => b.date - a.date);
  });

  // Future-dated posts: redirect to /blog/ instead of showing content
  // When the post's date arrives and the daily rebuild runs, the redirect
  // is automatically replaced by the real post (date is no longer future)
  eleventyConfig.addGlobalData("eleventyComputed", {
    layout: function(data) {
      if (data.tags?.includes("post") && data.date > now) {
        return "layouts/blog-redirect.njk";
      }
      return data.layout;
    }
  });

  // Date formatting filters (use UTC to avoid timezone shift)
  eleventyConfig.addFilter("readableDate", (dateObj) => {
    const d = new Date(dateObj);
    return d.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
      timeZone: "UTC"
    });
  });

  eleventyConfig.addFilter("dateToISO", (dateObj) => {
    const d = dateObj ? new Date(dateObj) : new Date();
    return d.toISOString();
  });

  eleventyConfig.addFilter("shortDate", (dateObj) => {
    const d = dateObj ? new Date(dateObj) : new Date();
    return d.toISOString().split("T")[0];
  });

  eleventyConfig.addFilter("currentYear", () => {
    return new Date().getFullYear();
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
