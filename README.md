# SainsOrScience Bot

## Description

**SainsOrScience** is a bot whom provides

-   Sains / _Science_
-   Biologi / _Biology_ 🧬
-   Fizik / _Physics_ 🍎
-   Geografi / _Geography_ 🌋
-   ~~Matematik / _Mathematics_ 📐~~
-   ~~Matematik Tambahan / _Additional Mathematics_ 🔢~~
-   Kimia / _Chemistry_ 🧪
    ...

quizzes from Malaysia's governmental secondary schools with both 🇲🇾 **Malay (Bahasa Melayu)** and 🇬🇧 **English** language support.

> **NOTE: THIS PROJECT IS NOT AFFILIATED WITH THE GOVERNMENT.**

> Credits to [@SpikeThatMike](https://www.youtube.com/@spikethatmike)'s **TypeScript Discord.JS Series** on YouTube for helping out with this project.

## Usage

Join [**Hello World** on Discord](https://discord.gg/t7CMXRWs7G) if you want to use it.

## Features

1. `/random <level: required> <subject: required>`

    : Sends out a random question of the subject `("Science" | "Biology" | "Physics" | "Geography" | "Chemistry")` from the [questions list](https://github.com/haydenykh/SainsOrScienceBot/blob/main/src/Questions) with the level option `("Form 1" | "Form 2" | "Form 3" | "Form 4" | "Form 5")`. It will send a error stating that if you're below Form 4 & 5, you couldn't use Biology, Physics and Chemistry subjects.

## Contribution

Head over to the [issues page](https://github.com/haydenykh/SainsOrScienceBot/issues) and help create more questions or fix errors. Read more at the [CONTRIBUTING.md file](CONTRIBUTING.md).

There's also a [TODO list](TODO.md) where you can see future updates to the bot.

## Commit Notes

| Commit Tag | Description                                                              | Example                                                                                                                                                                                                                                                                                   |
| :--------: | :----------------------------------------------------------------------- | :---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|   `feat`   | A new feature added.                                                     | **feat:** _added .gitattributes file_ ([3de76de](https://github.com/haydenykh/SainsOrScienceBot/commit/3de76dec9f3cf9ac57fae5a7246f284e7a8aba6b))                                                                                                                                         |
|   `fix`    | A bug fix fixed.                                                         | **fix:** _moved `labels` property inside schema_ ([aadfdba](https://github.com/haydenykh/SainsOrScienceBot/commit/aadfdba70c447ef01e45f5d821daa2dde5a0cfbb))                                                                                                                              |
|  `others`  | Other random commits.                                                    | **others:** _changed from bot invitation to server invitation_ ([c3b76f9](https://github.com/haydenykh/SainsOrScienceBot/commit/c3b76f91a0320f30c951424492739e25aa41dece))                                                                                                                |
|  `style`   | For styling purposes like tab indents, etc.                              | **style:** _added `governmental` text_ ([be1319c](https://github.com/haydenykh/SainsOrScienceBot/commit/be1319cd88d88471557b8134c0eed5df8b997082))                                                                                                                                        |
|  `build`   | Mainly for building packages from pull requests.                         | **build:** _updated packages_ ([35adfad](https://github.com/haydenykh/SainsOrScienceBot/commit/35adfadf54d4a12840c6f62f4c72a62d434013c8))                                                                                                                                                 |
|  `chore`   | Mainly for new tags/releases.                                            | **chore(release):** _0.7.0_ ([7448150](https://github.com/haydenykh/SainsOrScienceBot/commit/74481509256bfb49b10fbe3108ee10e529c938f6))                                                                                                                                                   |
|    `&`     | An ampersand in a commit message means two stuff being committed at once | _feat: added better filter system where it sends a warning message to the user whom did not ran the command_ **&** _moved the disable function in the "collection end" event_ ([2b3c968](https://github.com/haydenykh/SainsOrScienceBot/commit/2b3c96882e5baff8a43a345b3f01a688da566bd5)) |

## License

Under the [ISC License](LICENSE).
