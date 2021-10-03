module.exports = {
	siteMetadata: {
		siteUrl: "https://www.yourdomain.tld",
		title: "Long Line Riders",
	},
	plugins: [
		"gatsby-plugin-styled-components",
		"gatsby-plugin-gatsby-cloud",
		"gatsby-plugin-image",
		"gatsby-plugin-react-helmet",
		"gatsby-plugin-sitemap",
		"gatsby-plugin-mdx",
		"gatsby-plugin-sharp",
		"gatsby-transformer-sharp",
		{
			resolve: "gatsby-source-filesystem",
			options: {
				name: "images",
				path: "./src/images/",
			},
			__key: "images",
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `listen`,
				path: `${__dirname}/listen/`,
			},
		},
	],
};
