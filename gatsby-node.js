const path = require("path")

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const result = await graphql(`
    query GetPages {
      simplePage: allContentfulSimplePage {
        nodes {
          path
          title
          id
        }
      }
      infoPage: allContentfulInfoPage {
        nodes {
          path
          title
          id
        }
      }
      contactPage: allContentfulContact {
        nodes {
          path
          title
          id
        }
      }
    }
  `)
  result.data.simplePage.nodes.forEach(simplePage => {
    createPage({
      path: `${simplePage.path}`,
      component: path.resolve(`src/templates/SimplePageTemplate.js`),
      context: {
        slug: simplePage.id,
      },
    })
  })
  result.data.infoPage.nodes.forEach(infoPage => {
    createPage({
      path: `${infoPage.path}`,
      component: path.resolve(`src/templates/InfoPageTemplate.js`),
      context: {
        slug: infoPage.id,
      },
    })
  })
  result.data.contactPage.nodes.forEach(contact => {
    createPage({
      path: `${contact.path}`,
      component: path.resolve(`src/templates/ContactTemplate.js`),
      context: {
        slug: contact.id,
      },
    })
  })
}
