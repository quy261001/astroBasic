export function onClickDirective() {
    return {
      name: 'client-click',
      hooks: {
        "astro:config:setup": ({ addClientDirective }) => {
          addClientDirective({
            name: "click", // Provide the desired name for your custom client directive
            entrypoint: "./src/utils/click-directive/click.js",
          });
        },
      },
    };
  }