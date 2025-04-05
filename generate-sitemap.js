const { SitemapStream, streamToPromise } = require("sitemap");
const fs = require("fs");

const sitemap = new SitemapStream({ hostname: "https://mekanikaiitkgp.org" });

sitemap.write({ url: "/", changefreq: "daily", priority: 1.0 });
sitemap.write({ url: "/research-areas", changefreq: "weekly", priority: 0.8 }); 
sitemap.write({ url: "/gallery", changefreq: "monthly", priority: 0.8 }); 
sitemap.write({ url: "/team", changefreq: "yearly", priority: 0.7 }); 
sitemap.write({ url: "/course-material", changefreq: "monthly", priority: 0.8 }); 
sitemap.write({ url: "/intern-chronicles", changefreq: "weekly", priority: 0.8 }); 
sitemap.write({ url: "/core-expedition", changefreq: "weekly", priority: 0.8 }); 
sitemap.write({ url: "/dep-map", changefreq: "monthly", priority: 0.9 }); 
sitemap.end();

streamToPromise(sitemap).then((data) => {
  fs.writeFileSync("public/sitemap.xml", data.toString());
  console.log("✅ Sitemap generated successfully!");
});
