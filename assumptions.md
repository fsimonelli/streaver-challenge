# Assumptions

## Setup

- Turbopack for build time optimization.
- Tailwind CSS for styling.
- ESLint for code quality.
- Prettier for code formatting.

## Git

- One main branch (prod).
- One development branch (dev), pre main.
- As I'm working alone, feature branches are not required, so I worked directly on the dev branch. However, for some major changes I opted to create a feature branch and merge it into dev.
- Eventhough pull requests are not required, I still created them to keep track of changes and to try Vercel's deployment preview feature.

## Development

- IDE used: Visual Studio Code.
- Packages manager: npm.
- New packages installed: `swr`, `react-toastify`, `react-spinners`
- Card and search bar components retrieved from Flowbite component library.
- Assumed that the API would return list of posts following the `PostDTO` type defined in `utils/types.ts`
- Mostly relied on documentation, forum entries and experience to implement the requested features. ChatGPT only used sparingly to clarify some doubts (to understand some portions of the debouncing mechanism for example).

## Result

- Minimal UI displaying what was requested.
- Simulated API delays in order to test toast display in case of slow connections. In a real world scenario, the loading timeout would be bigger.
- Minimal error handling.
- No tests.
- No support for mobile devices.
