require("dotenv").config({
    path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
        title: "Tutorial Gatsby",
    },
    plugins: [
        "gatsby-plugin-image",
        "gatsby-plugin-sharp",
        {
            resolve: "gatsby-source-filesystem",
            options: {
              name: `blog`,
              path: `${__dirname}/blog`,
            }
        },
        "gatsby-plugin-mdx",
        "gatsby-transformer-sharp",
        //{
        //    resolve: "gatsby-source-pg",
        //    options: {
        //      connectionString: `postgres://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOST}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DATABASE}`,
        //      //connectionString: `${process.env.POSTGRES_CONNECT}`,
        //      schema: "public",
        //      refetchInterval: 60, // Refetch data every 60 seconds
        //    },
        //},
    ],
}