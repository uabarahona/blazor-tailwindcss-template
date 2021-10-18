<div align="center">
  <img height="60" src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Blazor.png">
  <img height="60" src="https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg">
  <h1>Blazor + Tailwind</h1>
</div>

**This template demostrates the integration of tailwindcss with blazor and covers important features like hot-reload and css isolation.**

https://user-images.githubusercontent.com/15148088/127200058-8e9a6d7f-1161-4a83-ae95-35162253589e.mp4

# Description
The main goal of this template is to provide an clean integration with tailwindcss thus it will not modify anything from the official blazor template. Once integration is done there will be additional work to bring tailwindcss templates to blazor :D

⚠️ I have not tested using hot-reload on VS, so this currently works using `dotnet-watch`

# Features
- [x] css-isolation works with tailwindcss and @apply directives
- [x] hot-reload considers tailwind compilation
- [x] `<styles>` gets compiled and copied over `wwwroot` without unused styles when release mode
- [x] change tailwindcss to use JIT compiler
- [x] only changed files gets re-compiled
- [x] make true hot-reload work on `sytles.css`
- [ ] have the post-css hot reload windows close along with donet-watch
- [ ] approach clean up (clean the code and make them more understadable)
- [ ] convert template to a real dotnet template
- [ ] create nuget package to add tailwindcss support for already created projects
- [ ] improve performance and make compilation faster


# Requirements 
- .NET 6 Preview 6
- Node.js 14+
