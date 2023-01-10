# fullstack-starter-template

### Project Scaffolding

This project uses [`hygen`](https://www.hygen.io/) for generating client code using templates. For each template a prompt would be shown.

**Make sure to provide all the names in kebab-case**.

### Scaffolding Page

- `npx hygen page new`

  ##### Parameters

  | field  | description                                           |
  | ------ | ----------------------------------------------------- |
  | `name` | Name of the page. Make sure to use _kebab-case_ name. |

  It would create the page directory (`src/pages/page-name`) with `index.ts` and `<name>.tsx` files.

- `npx hygen page sub-component`

  ##### Parameters

  | field    | description                                                |
  | -------- | ---------------------------------------------------------- |
  | `name`   | Name of the Component.                                     |
  | `parent` | Name of the page where this sub-component is to be created |

  It would create the `<name>.tsx` inside `src/pages/<parent>/components/` directory.

- `npx hygen page hook`

  ##### Parameters

  | field    | description                                                                                                                                     |
  | -------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
  | `name`   | Name of the **Make sure the hook-name doesn't contain _use_ word**. The hook file and function would be prefixed with _use_ word automatically. |
  | `parent` | Name of the page where this sub-component is to be created                                                                                      |

  It would create `use-<name>.tsx` inside `src/pages/<parent>/hooks/` directory.

### Scaffolding Components

- `npx hygen component new`

  ##### Parameters

  | field  | description                                           |
  | ------ | ----------------------------------------------------- |
  | `name` | Name of the page. Make sure to use _kebab-case_ name. |

  It would create the component directory (`src/components/<name>`) with `index.ts` and `<name>.tsx` files.

- `npx hygen component sub-component`

  ##### Parameters

  | field    | description                                                     |
  | -------- | --------------------------------------------------------------- |
  | `name`   | Name of the Component.                                          |
  | `parent` | Name of the component where this sub-component is to be created |

  It would create the `<name>.tsx` inside `src/components/<parent>/components/` directory.

### Scaffolding Hooks

- `npx hygen hook new`

  ##### Parameters

  | field  | description                                                                                                                                     |
  | ------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
  | `name` | Name of the **Make sure the hook-name doesn't contain _use_ word**. The hook file and function would be prefixed with _use_ word automatically. |

  It would create `use-<name>.tsx` inside `src/hooks/` directory. **Make sure the hook-name doesn't contain _use_ word**. The hook file and function would be prefixed with _use_ word automatically.